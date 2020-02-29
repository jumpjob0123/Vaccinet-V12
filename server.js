const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const withAuth = require('./middleware');
const cors = require('cors')
const app = express();
/////
//var fs = require('fs')
//var https = require('https')
/////
const secret = 'mysecretsshhh';
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
const mongo_uri = 'mongodb+srv://thanawat:thanawat280@cluster0-kkabf.mongodb.net/VACCINET?retryWrites=true&w=majority';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

////////////

////////////

const movieRouter = require('./server-component/routes/movie-router')


app.use(express.static(path.join(__dirname, 'public')));

//////////
//app.use('/uploads',express.static('uploads'));
//////////

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

app.post('/api/register', function(req, res) {
  const { email, password,username,firstname,lastname } = req.body;
  const user = new User({ email, password,username,firstname,lastname });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

app.post('/api/authenticate', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
        error: 'Incorrect email or password'
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
            error: 'Incorrect email or password'
          });
        } else {
       // const realobj=null
          const myuserobj = User.findOne({ email:email },  function(err,obj) {

          console.log(obj.username);
          res.cookie('username', obj.username, { expires: new Date(Date.now()+6000000), httpOnly: false })

          res.cookie('firstname', obj.firstname, { expires: new Date(Date.now()+6000000), httpOnly: false })
          res.cookie('lastname', obj.lastname, { expires: new Date(Date.now()+6000000), httpOnly: false })
          res.cookie('Note', obj.Note, { expires: new Date(Date.now()+6000000), httpOnly: false })
          res.cookie('referID', obj.referID, { expires: new Date(Date.now()+6000000), httpOnly: false })
         // res.cookie('createat', obj.createAt, { expires: new Date(Date.now()+30000), httpOnly: false })
 // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret/*, {
            expiresIn: '1h'
          }*/);
         // console.log(res.cookie('token', token, { expires: new Date(Date.now()+10000), httpOnly: true });
         //res.cookie('username', "CODEE", { expires: new Date(Date.now()+10000), httpOnly: true })
         res.cookie('token', token, { expires: new Date(Date.now()+6000000), httpOnly: false })

          res.sendStatus(200);



          });


        }
      });
    }
  });
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.use('/api', movieRouter)



/*https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(rocess.env.PORT || 8080, function () {
  console.log(`SExample app listening on port 3001! Go to https://localhost:3001/`)
})*/

app.listen(process.env.PORT || 8080);

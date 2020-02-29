import React, { Component } from 'react';
import { BrowserRouter as Router,useHistory, useLocation,Route, Switch ,Redirect } from 'react-router-dom';
import { browserHistory} from 'react-router';

import { makeStyles,TextField,Button  } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Home from './Home';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        VACCINET
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
       loginSuccess: false,
       username:''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleChangeEmail = async event => {
    const email = event.target.value
    this.setState({ email })
  }

  handleChangePassword = async event => {
    const password = event.target.value
    this.setState({ password })
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch('/api/authenticate', {

      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },

    })
    .then(res => {
    console.log(res.status)
      if (res.status === 200) {

        console.log(res)
       var history = require('browser-history')
    window.location.href = "/Home";
      //  history(-1)
       // return <Redirect to='/Home' />
       //browserHistory.push("/Home");

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {

  /*function LoginPage()  {
      let history = useHistory();
      let location = useLocation();

      let { from } = location.state || { from: { pathname: "/" } };

         let login = () => {

              history.push(from);

            }


    console.log(from.pathname)


      return (
          <div>
          {history.push(from)}
          </div>
        );
    }*/
    const { email, password } = this.state



    return (


        <Container component="main" maxWidth="xs">
            <Router>
             <Switch>
                           <Route exact path="/Home" exact component={Home} />
                            </Switch>
                           </Router>
          <CssBaseline />
          <div>
            <Typography component="h1" variant="h5">
              Sign in








            </Typography>
            <form onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={this.handleChangeEmail}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={this.handleChangePassword}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                value="Submit"
              >
                Sign In
              </Button>
              <Grid container justify="flex-end">
                          <Grid item>
                            <Link href="/register" variant="body2">
                              Do not have an account? Register
                            </Link>
                          </Grid>
                        </Grid>

            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
  }
}










import React, { Component } from 'react';
import { BrowserRouter as Router, Route,NavLink, Switch ,Redirect,useHistory, useLocation,Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { NavBar,Newspage,Carousel } from './components'
import { VacList, VacInsert, VacUpdate,RecordList,RecordListFamily, RecordInsert,UserInsert ,Register,ApptInsert,ApptList,ApptUpdate,uploadimg,qrlist,logout,Family,insertFamily,Profile} from './pages'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container, Row, Col
} from 'reactstrap';
//import './bootstrap/dist/css/bootstrap.min.css'
import withAuth from './withAuth';
import Home from './Home';
import Home2 from './Home';
import Secret from './Secret';
import Login from './Login';
//import Register from '../pages/Register'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (

     <Router>
<NavBar />


     { /*  <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>

          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/News">Secret</Link></li>
          <li><Link to="/vaccines/list">Vaccine List</Link></li>
          <li><Link to="/records/list">Record List</Link></li>
        </ul>*/}

        <Switch>

        <Route path="/upload" exact component={uploadimg} />
          <Route path="/" exact component={Newspage} />
          <Route path="/Home" exact component={Newspage} />
          <Route exact path="/News" component={Carousel} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
           <Route path="/register" exact component={Register} />
          <Route path="/vaccines/list" component={VacList} />
          <Route path="/records/list" exact component={withAuth(RecordList)} />
          //<Route path="/records/list/:id" exact component={withAuth(RecordList)} />
          <Route path="/records/list/:name" exact component={withAuth(RecordListFamily)} />
          <Route path="/records/create" component={withAuth(RecordInsert)} />


          <Route path="/appointmentupdate/update/:id" component={withAuth(ApptUpdate)} />
          <Route path="/appointment" component={withAuth(ApptInsert)} />
          <Route path="/appointmentlist" component={withAuth(ApptList)} />

          <Route path="/qrcodelist" exact component={qrlist} />

          <Route path="/logout" exact component={withAuth(logout)} />

          <Route path="/family" exact component={withAuth(Family)}/>
          <Route path="/addfamily" exact component={withAuth(insertFamily)}/>
          <Route path="/profile" exact component={withAuth(Profile)}/>

        </Switch>


      </Router>
    );
  }
}

export default App;

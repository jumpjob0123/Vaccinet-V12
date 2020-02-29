import React, { Component } from 'react';
import { Link,useHistory, useLocation,Route, Switch ,Redirect } from 'react-router-dom';
import { browserHistory} from 'react-router';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components'
const Wrapper = styled.div`
    padding: 0 20px 20px 20px;
`

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
      loginSuccess: false,
      username:'',
      firstname:'',
      lastname:''
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

      handleChangeUsername = async event => {
             const username = event.target.value
             this.setState({ username })
         }

      handleChangeFirstName = async event => {
             const firstname = event.target.value
             this.setState({ firstname })
         }

       handleChangeLastname = async event => {
              const lastname = event.target.value
              this.setState({ lastname })
          }

  onSubmit = (event) => {
    event.preventDefault();

   // let history = useHistory();
  //  let location = useLocation();
    //  let { from } = location.state || { from: { pathname: "/" } };

    /*let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        headers.append('Origin','http://localhost:3000');*/

    fetch('/api/register', {

      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
 //credentials: 'include'
    })
    .then(res => {
      if (res.status === 200) {
      //this.setState({ loginSuccess: true})
      //  console.log(res)
      //  var history = require('browser-history')
      //  history(-1)
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error register in please try again');
    });
  }

  render() {

 const { email, password, username,firstname,lastname } = this.state

    return (

     <Wrapper>
      <form onSubmit={this.onSubmit}>
        <h1>Register Below!</h1>


         <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email"  placeholder="Enter email" value={email}  onChange={this.handleChangeEmail} required />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password"  placeholder="Enter Password" value={password} onChange={this.handleChangePassword} required />
              </FormGroup>
           <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username"  placeholder="Enter username to show in Site" value= {username} onChange={this.handleChangeUsername} required />
              </FormGroup>
              <FormGroup>
                <Label for="firstname">Firstname</Label>
                <Input type="text" name="firstname"  placeholder="Enter Firstname" onChange={this.handleChangeFirstName} required />
              </FormGroup>

               <FormGroup>
                <Label for="lastname">Lastname</Label>
                <Input type="text" name="lastname"  placeholder="Enter Lastname" onChange={this.handleChangeLastname} required />
              </FormGroup>

               <Input type="submit" value="Submit"/>
      </form>


    </Wrapper>
    );
  }
}
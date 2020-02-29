import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,CardGroup,
  CardTitle, CardSubtitle, Button,Container, Row, Col,Badge
} from 'reactstrap';
//import Login from '../app/Login';
import { Redirect } from 'react-router'
import tempurl from '../api'
//import Image from 'react-bootstrap/Image'
import newslogo from '../functionlogo/news.png'
import bookletlogo from '../functionlogo/notebook.png'
import searchlogo from '../functionlogo/search.png'
import appointmentlogo from '../functionlogo/deadline3.png'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import Cookies from 'js-cookie';

console.log(tempurl.url)


const Wrapper = styled.div`
    padding: 10px 0px 0px 0px;
`
const tmpuser=Cookies.get('username')



class logout extends Component {
constructor(props) {
        super(props)
        this.state = {
            user: Cookies.get('username'),

            /*Vaccine_Name:'',
            Date:'',
            With:''*/

        }
    }


    render() {
Cookies.remove('token')
Cookies.remove('username')
Cookies.remove('firstname')
Cookies.remove('lastname')

        return(

            <Wrapper>

                   <Redirect to='/Home'/>


                </Wrapper>
        );
    }
}


export default logout;







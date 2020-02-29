import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,CardGroup,
  CardTitle, CardSubtitle, Button,Container, Row, Col,Badge
} from 'reactstrap';
//import Login from '../app/Login';
import UserProfile from './loginsession';
import tempurl from '../api'
//import Image from 'react-bootstrap/Image'
import newslogo from '../functionlogo/news.png'
import bookletlogo from '../functionlogo/notebook.png'
import searchlogo from '../functionlogo/search.png'
import appointmentlogo from '../functionlogo/deadline3.png'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'


console.log(tempurl.url)
console.log(UserProfile.getName())

const Wrapper = styled.div`
    padding: 10px 0px 0px 0px;
    .test{
          width: 100%;
          height: 150
          background-size: cover;
          border: 1px;
    }
        .test1{
              width: 100%;
              height: 200
              background-size: cover;
              border: 1px;
        }
`



class Newspage extends React.Component {
    render() {

        return(

            <Wrapper>
            <Container>

                    <Grid container spacing={0.5}>
                        <Grid item xs={12}>
                            <div onClick={() => window.location.href='/News'}>
                                <Card>
                                    <CardImg className="test" src={newslogo} alt="Card image cap" onClick={this.handleOnClick} />
                                </Card>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div onClick={() => window.location.href='/records/list'}>
                                <Card>
                                    <CardImg className="test"src={bookletlogo} alt="Card image cap" />
                                </Card>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <div onClick={() => window.location.href='/vaccines/list'}>
                                <Card>
                                    <CardImg className="test1"src={searchlogo} alt="Card image cap" />

                                </Card>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <div onClick={() => window.location.href='/appointmentlist'}>
                                <Card>
                                    <CardImg className="test1"src={appointmentlogo} alt="Card image cap" />
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

            </Container>
                </Wrapper>
        );
    }
}


export default Newspage;







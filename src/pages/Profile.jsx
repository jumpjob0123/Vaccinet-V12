import React, { Component,useState } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import Fab from '@material-ui/core/Fab';
import { makeStyles,TextField  } from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';
import styled from 'styled-components'
import img3 from './img3.png'
import { Button } from 'reactstrap';
import { Card, Icon, Image } from "semantic-ui-react"
import 'react-table-6/react-table.css'
import { Button2,Modal,ModalHeader, ModalBody, ModalFooter ,ListGroup, ListGroupItem} from 'reactstrap';
import treatment from './assets/cog (2).png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cookies from 'js-cookie';

const Wrapper = styled.div`
    padding: 0 20px 20px 20px;
        .test{
                  width: 100%;
                  background-size: cover;
                  border: 1px ;
            }
`
const Wrapper2 = styled.div`
                               padding: 20px 20px 80px 280px;
                           `
const Wrapper3 = styled.div`
                               padding: 1px 0px 0px 0px;
                           `

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`


class UpdateAppt extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/appointmentupdate/update/${this.props.id}`
    }

    render() {

        return <Button color="primary" size="lg" onClick={this.updateUser} block>Update</Button>
    }
}

/*class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}*/
class CreateAppt extends Component {
    addappt = event => {
        //event.preventDefault()
           window.location.href = '/appointment'
           }


    render() {

        return <Button color="primary" size="lg" onClick={this.addappt} block>Add Appointment</Button>
    }
}




/*class DeleteAppointment extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}*/




class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointment: [],
            columns: [],
            isLoading: false,
            /*Vaccine_Name:'',
            Date:'',
            With:''*/

        }
    }


    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAppointment().then(appt => {
            this.setState({
                appointment: appt.data.data,
                isLoading: false,
                 username: Cookies.get('username'),
                            firstname:Cookies.get('firstname'),
                            lastname:Cookies.get('lastname'),
                            Note:Cookies.get('Note'),
                            referID:Cookies.get('referID'),
            })
        })
    }

    render() {


        const { appointment, isLoading } = this.state

        const columns = [
           /* {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Vaccine ID',
                accessor: 'Vac_ID',
                filterable: true,
            },*/
            /*{
                Header: 'Name',
                accessor: 'PatientName',
                filterable: true,
            },*/

            {
                Header: 'Date',
                accessor: 'Date',
                filterable: true,
                width: 130,Cell: function(props) {
             console.log(props)
                var date = new Date(props.original.Date);
                var d = date.getDate();
                var m = date.getMonth()+1;
                var y = date.getYear()+1900;
                                                                         //  const picx =<ModalImage small={props.original.files64} large={props.original.files64}/>
                              return (
                                   <span>
                                      {d}-{m}-{y}
                                   </span>
                                      )
                                                                           }
             },
              {
                             Header: 'Vaccine',
                             accessor: 'Vaccine_Name',

                             filterable: true,width: 80
                         },
             {
                Header: 'Location',
                accessor: 'With',
                filterable: true,width: 90
              },


           {
                Header: '',
                accessor: '',
               Cell: function(props) {



                                                console.log(props)
                                            const fname = props.original.With;
                                            const vname = props.original.Vaccine_Name;

                                            var date2 = new Date(props.original.Date);
                                                            var dd = date2.getDate();
                                                            var mm = date2.getMonth()+1;
                                                            var yy = date2.getYear()+1900;
                                             const day =   JSON.stringify(dd)
                                             const month =   JSON.stringify(mm)
                                             const year =   JSON.stringify(yy)
                                             const daten = day+"-"+month+"-"+year
                                                 const [modal, setModal] = useState(false);

                                                  const toggle = () => setModal(!modal);
                                                  const change = (props) => {
                                                  window.location.href = `/appointmentupdate/update/${this.props.id}`
                                                  };

                                              //  const picx =<ModalImage small={props.original.files64} large={props.original.files64}/>
                                               /* <Row> &nbsp;&nbsp;&nbsp;&nbsp;<h6>Date : </h6>&nbsp;{dd}-{mm}-{yy}
                                                                            </Row>
                                                                            <Row> &nbsp;&nbsp;&nbsp;&nbsp;<h6>Vaccine : </h6>&nbsp; {vname}
                                                                            </Row>
                                                                            <Row> &nbsp;&nbsp;&nbsp;&nbsp;<h6>Location: </h6>&nbsp;{fname}
                                                                            </Row>

                                                 <TextField  variant="outlined" margin="normal" required fullWidth id="date" label="Appointment Date"
                                                                                        name="email"
                                                                                        value={daten}
                                                                                      //  onChange={this.handleChangeDate}
                                                                                        autoComplete="email"
                                                                                        autoFocus
                                                                                     />
                                                                        <TextField  variant="outlined" margin="normal" required fullWidth id="vacname" label="Vaccine"
                                                                                        name="email"
                                                                                        value={vname}

                                                                                        autoComplete="email"
                                                                                        autoFocus
                                                                                      />
                                                                        <TextField  variant="outlined" margin="normal" required fullWidth id="location" label="Location"
                                                                                        name="email"
                                                                                        value={fname}
                                                                                        autoComplete="email"
                                                                                        autoFocus
                                                                                      />


                                                                            */





                                                   return (
                                                           <span>

                                                             <Fab size="small" color="info" aria-label="edit">

                                                                <img src={treatment} onClick={toggle} />

                                                                  </Fab>
                                                                  <Modal isOpen={modal} toggle={toggle}>
                                                                        <ModalHeader toggle={toggle}>Take an action</ModalHeader>
                                                                        <ModalBody>



                                                                            <Row> &nbsp;&nbsp;&nbsp;&nbsp;<h6>Date : </h6>&nbsp;{dd}-{mm}-{yy}
                                                                            </Row>
                                                                            <Row> &nbsp;&nbsp;&nbsp;&nbsp;<h6>Vaccine : </h6>&nbsp; {vname}
                                                                            </Row>
                                                                            <Row> &nbsp;&nbsp;&nbsp;&nbsp;<h6>Location: </h6>&nbsp;{fname}
                                                                            </Row>

                                                                            <Row>
                                                                             </Row>
                                                                              <Row>

                                                                                <Col> <UpdateAppt id={props.original._id} /></Col>
                                                                                <Col><Button color="primary" size="lg"  block>Delete</Button></Col>
                                                                              </Row>



                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                Select an action to deal with selected Record
                                                                                </ModalFooter>
                                                                        </Modal>

                                                           </span>
                                                   )
                                                },width: 50
            },
          /*  {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateMovie id={props.original._id} />
                        </span>
                    )
                },
            },*/
        ]

        let showTable = true
        if (!appointment.length) {
            showTable = false
        }
{/*<Image src={img3} wrapped ui={false} />*/}
        return (
            <Wrapper>
            <h2>User Profile</h2>
             <Card>
             <Image className= "test" src={img3} />
                                 <Card.Content>
                                   <Card.Header><h4>{this.state.firstname+" "+this.state.lastname}</h4></Card.Header>
                                   <Card.Meta>

                                   </Card.Meta>

                                 </Card.Content>
                                 <Card.Content>



                </Card.Content>
                </Card>
                 <ListGroup>
                  <ListGroupItem color="success">Phone 0910974312</ListGroupItem>
                       <ListGroupItem  color="info">Drug Allergy : Paracetamol</ListGroupItem>
                       <ListGroupItem  color="warning">Note  {this.state.Note}</ListGroupItem>
                       <ListGroupItem  color="danger">ReferID is {this.state.referID}</ListGroupItem>
                       <ListGroupItem color="secondary" >Joined in 2015</ListGroupItem>
                        </ListGroup>
                <Wrapper3>

                </Wrapper3>
            </Wrapper>

        )
    }
}

export default Profile

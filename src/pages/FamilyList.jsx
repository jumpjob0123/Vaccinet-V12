import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import {Spinner  } from 'reactstrap';
import styled from 'styled-components'
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';
import defaultimg from './img3.png'
import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 20px 40px 20px;
`
const Wrapper2 = styled.div`
    padding: 0 20px 20px 150px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class CreateMember extends Component {
    addMember = event => {
        //event.preventDefault()
           window.location.href = '/addfamily'
           }

    render() {
        return  <Button color="primary" size="lg" onClick={this.addMember} block>Add Member</Button>
    }
}

class UpdateMovie extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMovie extends Component {
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
}

class FamilyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Family: [],
            columns: [],
            isLoading: false,
            memberArray:[]
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getMember().then(Family => {

        //var allProductsArray = Family.toArray();

            this.setState({
                Family: Family.data.data,
                isLoading: false,
                memberArray: Family.data.data
            })
        }


        )
    }

    render() {
        const { Family, isLoading,memberArray } = this.state
        console.log(memberArray[0])
        var elements=[];
        var names=[];
        var nameary

        for(var i=0;i<memberArray.length;i++){
                     // push the component to elements!
                     names.push(memberArray[i].firstname+" "+memberArray[i].lastname)
                    nameary=names[i]
                     console.log(i)


                    elements.push(
                            <Card onClick={() => window.location.href=`/records/list/${names[i]}`}>
                            <CardBody>
                            {names[i]}
                            <CardTitle>{ memberArray[i].firstname+" "+memberArray[i].lastname}</CardTitle>
                            <CardText>{memberArray[i].Note} </CardText>

                            <img width="25%" src={defaultimg} alt="Card image cap" />
                            </CardBody></Card>
                        );

                }
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
            {
                Header: 'First Name',
                accessor: 'firstname',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'lastname',
                filterable: true,
            },
            {
                Header: 'Note',
                accessor: 'note',

                filterable: true,
             },
            {
                Header: 'referID',
                accessor: 'referID',
                filterable: true,
              },
           /*   {
                              Header: 'Target Group',
                              accessor: 'Target_Group',
                              filterable: true,
                            },*/
            /*  {
                              Header: 'Note',
                              accessor: 'Note',
                              filterable: true,
                            },*/

           /*{
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMovie id={props.original._id} />
                        </span>
                    )
                },
            },*/
           /* {
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
        if (!Family.length) {
            showTable = false
        }

         /*let datatmp;
                    if (this.state.isLoading) {
                      datatmp =<Wrapper2> <Spinner type="grow" color="primary" /></Wrapper2>
                    } else {
                      datatmp = <div>
                                <ReactTable
                                                                              data={Family}
                                                                              columns={columns}
                                                                              loading={isLoading}
                                                                              defaultPageSize={10}
                                                                              showPageSizeOptions={true}
                                                                              minRows={0}
                                                                          />
                            </div>
                    }*/

        return (
            <Wrapper>
            <h2>Family</h2>


              {elements}


               <div><CreateMember/></div>
            </Wrapper>
        )
    }
}
/*{showTable && (
                    <ReactTable
                        data={Family}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}*/
export default FamilyList
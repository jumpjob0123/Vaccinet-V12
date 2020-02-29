import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import {Spinner  } from 'reactstrap';
import styled from 'styled-components'

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

class VacList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { movies, isLoading } = this.state

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
                Header: 'Disease',
                accessor: 'Disease_Name',
                filterable: true,
            },
            {
                Header: 'Vaccine',
                accessor: 'Vaccine_Name',
                filterable: true,
            },
            {
                Header: 'Dose',
                accessor: 'Number_of_Dose',

                filterable: true,
             },
            /* {
                Header: 'Stimulant',
                accessor: 'Stimulant',
                filterable: true,
              },*/
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
        if (!movies.length) {
            showTable = false
        }

         let datatmp;
                    if (this.state.isLoading) {
                      datatmp =<Wrapper2> <Spinner type="grow" color="primary" /></Wrapper2>
                    } else {
                      datatmp = <div>
                                <ReactTable
                                                                              data={movies}
                                                                              columns={columns}
                                                                              loading={isLoading}
                                                                              defaultPageSize={10}
                                                                              showPageSizeOptions={true}
                                                                              minRows={0}
                                                                          />
                            </div>
                    }

        return (
            <Wrapper>
            <h2>Vaccine Searcher</h2>
             {datatmp}

            </Wrapper>
        )
    }
}
/*{showTable && (
                    <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}*/
export default VacList

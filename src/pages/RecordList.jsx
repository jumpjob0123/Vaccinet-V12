import React, { Component,useState  } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import Fab from '@material-ui/core/Fab';
import UserProfile from '../components/loginsession';
import Cookies from 'js-cookie';
import styled from 'styled-components'
import { Card, Icon, Image } from "semantic-ui-react"
import 'react-table-6/react-table.css'
import ResizeImage from "react-resize-image"
import img3 from './img3.png'
import './addimg.css';
//// Light-box for POPUP image
import ModalImage from "react-modal-image";
import FileBase64 from 'react-file-base64';
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Spinner  } from 'reactstrap';
import treatment from './assets/treatment (1).png'
//////
var tmpuser = UserProfile.getName();
const Wrapper = styled.div`
    padding: 0 20px 20px 20px;
        .test{
                  width: 100%;
                  background-size: cover;
                  border: 1px ;
            }
`

const Wrapper2 = styled.div`
    padding: 0 20px 20px 150px;
`

const Create = styled.div`
    color: #ff0000;
    cursor: pointer;
`
/////Copy
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class UpdatePic extends Component {
      constructor(props) {
        super(props)
        this.state={String64:[]}
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
      }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
        })
    }

    render() {
    const pic =this.state.String64;
    let imgPreview,imgPreview2,picx;
        console.log(this.state.String64)
        console.log(this.state.file)
        imgPreview = <img src={this.state.String64} height={50}/>
        imgPreview2 = <img src={this.state.file} height={10}/>
     //   picx =<ModalImage small={props.original.files64} large={props.original.files64}/>
        return (
        <form >
            <div className="text-center">
                <input type="file" opacity="0" onChange={this.uploadSingleFile}  />
            </div>
            <div style={{ maxWidth: "65px" }}>
                {imgPreview}
            </div>
        </form>
         )
    }
}


/////////////////////////////////////////////////////////////////////////////////////

class CreateRecord extends Component {
    addUser = event => {
        //event.preventDefault()
           window.location.href = '/records/create'
           }

    render() {
        return  <Button color="primary" size="lg" onClick={this.addUser} block>Create Record</Button>
    }
}

class RecordList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: [],
            columns: [],
            isLoading: false,
            username: Cookies.get('username'),
            firstname:Cookies.get('firstname'),
            lastname:Cookies.get('lastname'),
            String64:[]
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true,
         username:Cookies.get('username')

         })
        //console.log("Hi"+Cookies.get('username'))
        await api.getAllRecord(this.state.username).then(records => {
         //  console.log(records.data.data[5].files64)
          /// for(var i=0;i<5;i++){
           this.setState({

                           records: records.data.data,
                           String64: records.data.data[5].files64,
                           isLoading: false,
                       })
         //  }

        })
    }

    render() {

        const { records, isLoading, username } = this.state
        console.log('TCL: RecordList -> render -> records', records)

        const columns = [
           /* {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Pat ID',
                accessor: 'PatID',
                filterable: true,
            },
            {
                Header: 'Pat Name',
                accessor: 'PatName',
                filterable: true,
            },
            {
                Header: 'Vac ID',
                accessor: 'VacID',
               filterable: true
            },*/{
                                            Header: 'Time',
                                            accessor: 'createdAt',
                                            width: 110
                                          //  Cell: props => <span>{props.value.join(' / ')}</span>
                                        },
            {
                Header: 'Vaccine',
                accessor: 'VacName',
                width: 70
               //      ,width: "130%"
            },
           /* {
                Header: 'Vaccination Count',
                accessor: 'files64',

            },*/
             {
                            Header: 'Disease',
                            accessor: 'DiseaseName',
                       //     width: "50%"
                        },
                        {
                            Header: 'Lot.',
                            accessor: 'files64',
                                Cell: function(props) {
                                 console.log(props)

                                  const [modal, setModal] = useState(false);

                                   const toggle = () => setModal(!modal);

                                 const picx =<ModalImage small={props.original.files64} large={props.original.files64}/>


                                    return (
                                            <span>
                                             <Fab size="small" color="primary" aria-label="add">
                                                                                      <img src={treatment} onClick={toggle} />
                                                                                                     </Fab>

                                                   <Modal isOpen={modal} toggle={toggle}>
                                                         <ModalHeader toggle={toggle}>Lot No.</ModalHeader>
                                                         <ModalBody>

                                                                    {picx}
                                                                 </ModalBody>
                                                         </Modal>
                                            </span>
                                    )
                                 }

                                ,width: 55
                        },
          /*  {
                            Header: 'Time',
                            accessor: 'createdAt',
                          //  Cell: props => <span>{props.value.join(' / ')}</span>
                        },*/


        ]
        let patName = this.state.records.PatName

        let showTable = true
                if (!records.length) {
                    showTable = false
                }


        let datatmp;
            if (this.state.isLoading) {
              datatmp =<Wrapper2> <Spinner type="grow" color="primary" /></Wrapper2>
            } else {
              datatmp = <div>
                        <ReactTable
                                                                      data={records}
                                                                      columns={columns}
                                                                      loading={isLoading}
                                                                      defaultPageSize={3}
                                                                      showPageSizeOptions={true}
                                                                      minRows={0}
                                                                  />
                    </div>
            }
            //    console.log("HELLO"+this.state.String64)

//<ModalImage small={this.state.file} large={this.state.file}/>
    return (
        <Wrapper>
            <h2>Vaccine Booklet</h2>
                <Card>
                    <Image className= "test" src={img3} />
                    <Card.Content>
                      <Card.Header>{this.state.firstname+" "+this.state.lastname}</Card.Header>
                      <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        {this.state.firstname+" "+this.state.lastname} is a student at Faculty of ICT.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                       {datatmp}


                    </Card.Content>
                </Card>
            <div><CreateRecord/> </div>


        </Wrapper>
    )
    }
}

       /*  {showTable && (
                                                  <ReactTable
                                                      data={records}
                                                      columns={columns}
                                                      loading={isLoading}
                                                      defaultPageSize={3}
                                                      showPageSizeOptions={true}
                                                      minRows={0}
                                                  />
                              )}*/
export default RecordList



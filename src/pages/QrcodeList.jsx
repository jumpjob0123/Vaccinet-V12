import React, { Component,useState  } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
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
import { Button,Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import treatment from './assets/treatment (1).png'
//////
var tmpuser = UserProfile.getName();
const Wrapper = styled.div`
    padding: 0 20px 20px 20px;
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
        await api.getQrcode().then(records => {
          // console.log(records.data.data[5].files64)
          /// for(var i=0;i<5;i++){
           this.setState({

                           records: records.data.data,
          //                 String64: records.data.data[5].files64,
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
            },*/
            {
                Header: 'Vaccine_name',
                accessor: 'Vaccine_name',
                width: 100
               //      ,width: "130%"
            },
           /* {
                Header: 'Vaccination Count',
                accessor: 'files64',

            },*/
             {
                            Header: 'Disease_name',
                            accessor: 'Disease_name',
                       //     width: "50%"
                        },
                        {
                            Header: 'Qrcode',
                            accessor: 'qrcode_img',
                                Cell: function(props) {
                                 console.log(props)

                                  const [modal, setModal] = useState(false);

                                   const toggle = () => setModal(!modal);

                                 const picx =<ModalImage small={props.original.qrcode_img} large={props.original.qrcode_img}/>


                                    return (
                                            <span>



                                                 <img src={treatment} onClick={toggle} />
                                                   <Modal isOpen={modal} toggle={toggle}>
                                                         <ModalHeader toggle={toggle}>Lot No.</ModalHeader>
                                                         <ModalBody>
                                                           {picx}
                                                                 </ModalBody>
                                                         </Modal>
                                            </span>
                                    )
                                 }

                                ,width: 38
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
            //    console.log("HELLO"+this.state.String64)

//<ModalImage small={this.state.file} large={this.state.file}/>
    return (
        <Wrapper >
            <h2>Vaccine Booklet</h2>
                <Card >
                    <Image src={img3} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{this.state.firstname+" "+this.state.lastname}</Card.Header>
                      <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Thanawat is a student at Faculty of ICT.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                      {showTable && (
                                          <ReactTable
                                              data={records}
                                              columns={columns}
                                              loading={isLoading}
                                              defaultPageSize={10}
                                              showPageSizeOptions={true}
                                              minRows={0}
                                          />
                      )}

                    </Card.Content>

                </Card>



        </Wrapper>
    )
    }
}

export default RecordList



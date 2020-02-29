import React, { Component,useState  } from 'react'
import api from '../api'
import ToggleBox from "../components/ToggleBox";
import Cookies from 'js-cookie';
import QrReader from "react-qr-reader";
import styled from 'styled-components'
import ModalImage from "react-modal-image";
import FileBase64 from 'react-file-base64';
//import {Button} from '@material-ui/core';
import { Button } from 'reactstrap';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button2,Modal,ModalHeader, ModalBody, ModalFooter,Toast, ToastBody, ToastHeader } from 'reactstrap';
import ModalImage2 from "react-modal-image";
import './assets/RecordCSS.css'
//import WebFont from 'webfontloader';
////////////////////////// const /////////////////////////////////
/*WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});*/

const Title = styled.h1.attrs({
    className: 'h1',
})``


const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
font-family: 'Krub', ;
    margin: 0 30px;
`

const Wrapper2 = styled.div`
    padding: 20px 20px 20px 20px;
`

const Label = styled.label`
    margin: 5px;
`
const Wrapcode = styled.div`
    margin: 1rem;
`
const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 0px 0px 0px 13px;
    width: 90%;
`



const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 5px 0px 0px 0px;
`


class UpdatePic extends Component {
      constructor(props) {
        super(props)
        this.state={}
        this.uploadSingleFile = this.uploadSingleFile.bind(this)

      }

    uploadSingleFile(e) {
    console.log(e.target.files[0])
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
        })
    }

    render() {


    console.log(this.state.file)

    let imgPreview,imgPreview2,picx;
        imgPreview = <img src={this.state.file} height={50}/>
        imgPreview2 = <img src={this.state.file} height={10}/>
        picx =<ModalImage small={this.state.file} large={this.state.file}/>
        return (
        <form >
            <div className="text-center">
                <input type="file" opacity="0" onChange={this.uploadSingleFile}  />
            </div>
            <div style={{ maxWidth: "90px" }}>
                {picx}
            </div>
        </form>
        )
    }
}

class RecordInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PatID: '',
            PatName: '',
            VacID: '',
            VacName: '',
            VacCount: '',
            time: '',
            result: "No result"
            ,delay: 300,
            field1: "No result",
            field2: "No result",
            field3: "",
            field4: "",
            field5: "No result",
            files64: "",
             username: Cookies.get('username'),
                        firstname:Cookies.get('firstname'),
                        lastname:Cookies.get('lastname'),

        }
        this.handleScan = this.handleScan.bind(this)
    }


    // {"PatID":"Pat001","PatName":"Suchat Test","VacID":"Vac001","VacName":"DtaP","VacCount":1}
       getFiles(files){
           this.setState({ files64: files[0].base64 })
           console.log(this.state.files64)
         }
        handleScan(data) {
                   if (data) {

                       //console.log(JSON.parse(data))
                       var obj = JSON.parse(data)
                       //console.log(obj.PatID)
                       this.setState({
                       result: obj.qrcode_ID,
                       field1: obj.qrcode_ID, //patID
                       field2: this.state.firstname+" "+this.state.lastname, //patName
                       field3: obj.Vaccine_name,
                       field4: obj.Disease_name,
                       field5: obj.qrcode_ID //VacCount

                     });
                   }
                 }

                handleError(err) {
                     console.error(err);
                   }

    handleChangeInputPatID = async event => {
    const { field1 } = this.state
        const PatID = event.target.value
        this.setState({ PatID })
    }

    handleChangeInputPatName = async event => {
    const { field2 } = this.state
            const PatName = event.target.value
            this.setState({ PatName })
        }

    handleChangeInputVacID = async event => {
    const {field3 } = this.state
            const VacID = event.target.value
            this.setState({ VacID:field3 })
        }

    handleChangeInputVacName = async event => {
    const {field4 } = this.state
            const VacName  = event.target.value
            this.setState({ VacName:field4 })
        }

    handleChangeInputVacCount = async event => {
    const {field5 } = this.state
            const VacCount = event.target.value
            this.setState({ VacCount })
        }

    handleChangeInputTime = async event => {
    const time = event.target.value
        this.setState({ time })
    }

    handleIncludeRecord = async () => {
        const { PatID, PatName, VacID,VacName,DiseaseName,VacCount,time,field1,field2,field3,field4,field5,files64,username } = this.state
        const arrayTime = time.split('/')
        //const payload = { PatID:field1, PatName:field2, VacID:field3,VacName:field4,VacCount, time: arrayTime,files64:files64 }
        if(!field2 || !field3){
        window.alert("Please scan QR Code to fill the form.")
        }

         const payload = {  PatName:field2,
                            VacName:field3,
                            DiseaseName:field4,
                            VacCount,
                            time: arrayTime,
                            files64:files64,
                            username: Cookies.get('username')}


    await api.insertRecord(payload).then(res => {


            window.alert(`Record inserted successfully`)
            this.setState({
              //  PatID: '',
                PatName: '',
             //   VacID: '',
                VacName: '',
                DiseaseName:'',
                VacCount: '',
                time: '',
                files64:''
            })
        })

          window.location.href="/records/list"
    }

    ShowHideTextComponentView = () =>{

      if(this.state.status == true)
      {
        this.setState({status: false})
      }
      else
      {
        this.setState({status: true})
      }
    }
    render() {

        const { PatID, PatName, VacID,VacName,VacCount,time,result,field1,field2,field3,field4,field5,files64 } = this.state
        const picx =<ModalImage small={files64} large={files64}/>

        return (


            <Wrapper>
                <h3>Create Record</h3>
                {/*////////////////////////////////////ButtonGroup/////////////////////////////////////////*/}




                            <Button color="info" size="sm" block>
                                <ToggleBox title=" Lot Number">
                                    <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
                                    <Wrapcode> {picx} </Wrapcode>
                                </ToggleBox>
                            </Button>


                            <Button color="info" size="sm" block>
                                <ToggleBox title=" QrReader">
                                    <QrReader  delay={this.state.delay}
                                        onScan={this.handleScan}
                                            style={{ width: "100%" }}
                                    />
                                    <p>{this.state.result}</p>
                                    <Row>

                                                        <Label> PatName: </Label>
                                                            <InputText
                                                                type="text"
                                                                value={this.state.firstname+" "+this.state.lastname}
                                                                onChange={this.handleChangeInputPatName}
                                                            />
                                                        <Label> Vaccine Name: </Label>
                                                            <InputText
                                                                type="text"
                                                                value={field3}
                                                                placeholder="Vaccine Name"
                                                              //  onChange={this.handleChangeInputVacID}
                                                            />
                                                        <Label> Disease Name: </Label>
                                                            <InputText
                                                                type="text"
                                                                value={field4}
                                                                 placeholder="Disease Name"
                                                              //  onChange={this.handleChangeInputVacName}
                                                            />
                                                        <Label> VacCount: </Label>
                                                            <InputText
                                                                type="number"
                                                                value={VacCount}
                                                                onChange={this.handleChangeInputVacCount}
                                                            />
                                                           <Label> Time: </Label>
                                                                <InputText
                                                                     type="text"
                                                                     value={time}
                                                                     onChange={this.handleChangeInputTime}

                                                                                                                    />
                                                     </Row>
                                </ToggleBox>
                            </Button>

                        <Row>

                                         <Col>
                                            <Button style = {{width:"100%",margin: "5px 0px 0px 0px" ,background: "#1D98EA"}}color="primary"  variant="contained"  onClick={this.handleIncludeRecord} block> Add Record </Button>

                                         </Col>


                                         <Col>
                                            <CancelButton style = {{width:"100%",background: "#CC6666"}} variant="contained" color="primary" href={'/records/list'}> Cancel </CancelButton>
                                         </Col>
                                         <Wrapper2><div >
                                         <Toast>
                                                   <ToastHeader>
                                                     คำแนะนำ
                                                   </ToastHeader>
                                                   <ToastBody>
                                                   หากได้รับวัคซีนแล้วมีอาการคันตามตัว ผื่นแดงมากบริเวณที่ฉีดหรือผื่นตามตัว ปากบวม หน้าบวม หายใจลำบาก หายใจเสียงดังผิดปกติ หรือหมดสติ กรุณาแจ้งบุคลากร​ทางการแพทย์ที่ใกล้ที่สุดทันที หรือหากรุนแรงมาก

                                                 โทร 1669 (สายด่วนเจ็บป่วยฉุกเฉิน)


                                                   </ToastBody>
                                                 </Toast>
                                         </div></Wrapper2>
                        </Row>

                </Wrapper>
            )
       }
    }

export default RecordInsert


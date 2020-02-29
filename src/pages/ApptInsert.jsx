import React, { Component } from 'react'
import api from '../api'
//import datepick from './datepicker'
import styled from 'styled-components'
import DatePicker from 'react-date-picker';
import Cookies from 'js-cookie';
import Select from 'react-select';
//import 'react-dropdown/style.css'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
const options = [
      { label: 'Chickenpox (VZV)' },
      { label: 'Dengue (DEN)' },
      { label: 'Diarrhea (RotaTeq)' },
      { label: 'Diarrhea (Rotarix)' },
      { label: 'Diarrhea (Rotavac)' },
      { label: 'Diarrhea (RotaTeq)' },
      { label: 'Diphtheria-tetanus-whooping cough (DTwP)' },
      { label: 'Diphtheria-tetanus-whooping cough (Tdap)' },
      { label: 'Diphtheria-tetanus-whooping cough (DTaP)' },
      { label: 'Diphtheria-tetanus-whooping cough (Td)' },
      { label: 'Diphtheria-tetanus-whooping cough (TdaP)' },
      { label: 'Encephalitis (CD-JEVAC)' },
      { label: 'Encephalitis (JEVAC)' },
      { label: 'Encephalitis (THAIJEV)' },
      { label: 'Encephalitis (IMOJEV)' },
      { label: 'Hepatitis A (HAV-live)' },
      { label: 'Hepatitis A (HAV-inactive)' },
      { label: 'Hepatitis B (HBV)' },
      { label: 'Hib (Hib)' },
      { label: 'HPV (HPV2)' },
      { label: 'HPV (HPV4)' },
      { label: 'Influenza (Influenza)' },
      { label: 'Measles, Mumps, Rubella (MMRV)' },
      { label: 'Measles, Mumps, Rubella (MMR)' },
      { label: 'Measles, Mumps, Rubella (MR)' },
      { label: 'Pneumonia (PCV10)' },
      { label: 'Pneumonia (PCV13)' },
      { label: 'Polio (IPV)' },
      { label: 'Polio (bivalent OPV)' },
      { label: 'Rabies (Rabies)' },
      { label: 'Tuberculosis (CBG)' },

    ];


   /* const options = [
       'DtaP','Polio'
    ];*/

const defaultOption = options[0]

class ApptInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PatientName: Cookies.get('firstname')+' '+Cookies.get('lastname'),  //name
            Vaccine_Name: '', //time
               Date: new Date(),
              With: '',
              selectedOption: ''
        }
    }

    onChange = Date => this.setState({ Date })

    handleChange = event => {
  //  const Vaccine_Name = event.options
        this.setState({Vaccine_Name:event.label},() => console.log(`Option selected:`, this.state.Vaccine_Name));
      };

    handleChangePatientName = async event => {
        const PatientName = event.target.value
        this.setState({ PatientName })
    }

    handleChangeVaccine_Name = async event => {
        const Vaccine_Name = event.target.value


        this.setState({ Vaccine_Name })
    }

    handleChangeDate = async event => {
        const Date = event.target.value
        this.setState({ Date })
    }

    handleChangeWith = async event => {
            const With = event.target.value
            this.setState({ With })
        }



    handleIncludeAppt = async () => {
        const {PatientName,Vaccine_Name,Date, With} = this.state

        const payload = { PatientName,Vaccine_Name,Date, With }

        await api.addAppointment(payload).then(res => {
            window.alert(`Vac inserted successfully`)
            this.setState({
                PatientName: '',
                Vaccine_Name: '',
                Date: '',
                With: '',
            })
            window.location.href = `/appointmentlist`
        })
    }

    render() {
        const {PatientName,Vaccine_Name,Date, With ,selectedOption  } = this.state
        return (
            <Wrapper>
                <Title>Add Appointment</Title>

                <Label>Patient Name: </Label>
                <InputText
                    type="text"
                    value={PatientName}
                    onChange={this.handleChangePatientName}
                />

                <Label>Vaccine: </Label>

                <Select
                        value={this.state.Vaccine_Name.label}
                        onChange={this.handleChange}
                        options={options}
                      />




                <Label>Appointment Date: </Label>
                <DatePicker
                                                        onChange={this.onChange}
                                                        value={this.state.Date}
                                                      />


                <Label>Location : </Label>
                                <InputText
                                    type="text"
                                    value={With}
                                    onChange={this.handleChangeWith}
                                />





                <Button onClick={this.handleIncludeAppt}>Add Appointment</Button>
                <CancelButton href={'/appointmentlist'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ApptInsert

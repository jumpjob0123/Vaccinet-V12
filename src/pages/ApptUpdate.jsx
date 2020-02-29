import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import api from '../api'
import Select from 'react-select';
import styled from 'styled-components'

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

class VacUpdate extends Component {
    constructor(props) {
        super(props)
           console.log(props)
        this.state = {
            id: this.props.match.params.id,
            PatientName: '', //name
            Vaccine_Name: '', //rating
            Date: new Date(), // time
            With: '',
            selectedOption: ''
        }
        console.log(this.state.Date)
    }

onChange = Date => this.setState({ Date })

         handleChangeDate = async event => {
                                          const Date = event.target.value
                                         this.setState({ Date })
                                                      }

        handleChange = event => {
          //  const Vaccine_Name = event.options
                this.setState({Vaccine_Name:event.label},() => console.log(`Option selected:`, this.state.Vaccine_Name));
              };

         handleChangeVaccine_Name = async event => {
                                      const Vaccine_Name = event.target.value
                                      this.setState({ Vaccine_Name })
                                  }



                                  handleChangeWith = async event => {
                                          const With = event.target.value
                                          this.setState({ With })
                                      }


      handleUpdateAppt = async () => {
                           const { id,  Vaccine_Name, Date,With } = this.state

                           const payload = {  Vaccine_Name, Date,With }

                           await api.editAppointment(id, payload).then(res => {
                               window.alert(`Appt updated successfully`)
                               this.setState({
                                    //name
                                   Vaccine_Name: '', //rating
                                   Date: '', // time
                                   With: '',
                               })
                               window.location.href="/appointmentlist"
                           })
                       }




    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getAppointmentById(id)

        this.setState({
         //   PatientName: movie.data.data.PatientName,
            Vaccine_Name: movie.data.data.Vaccine_Name,
            Date: movie.data.data.Date,
            With: movie.data.data.With,
          //  Dates: this.props.date

        })


    }
onChange = Date => this.setState({ Date })
    render() {
        const { Vaccine_Name, With,Date ,selectedOption} = this.state

        //console.log("Date JAAJAJ"+Dates)
        return (
            <Wrapper>
                <Title>Update Appointment</Title>

                <Label>Vaccine : </Label>

                <Select
                                        value={this.state.Vaccine_Name.label}
                                        onChange={this.handleChange}
                                        options={options}
                                      />

                <Label>Date :</Label>
                  <DatePicker
                  // placeholder={this.state.Date}
                    onChange={this.onChange}
                    value={this.props.date}

                   />
                <InputText
                                    type="text"
                                    value={this.state.Date}
                                    onChange={this.handleChangeDate}
                                />

                <Label>With: </Label>
                <InputText
                    type="text"
                    value={With}
                    onChange={this.handleChangeWith}
                />


                <Button onClick={this.handleUpdateAppt}>Update Appointment</Button>
                <CancelButton href={'/appointmentlist'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default VacUpdate

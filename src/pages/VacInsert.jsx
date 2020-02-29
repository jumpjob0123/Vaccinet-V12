import React, { Component } from 'react'
import api from '../api'

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

class VacInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Vac_ID: '',  //name
            Disease_Name: '', //rating
            Vaccine_Name: '', //time
             Number_of_Dose: '',
              Stimulant: '',
               Target_Group: '',
                Note: '',
        }
    }



    handleChangeVac_ID = async event => {
        const Vac_ID = event.target.value
        this.setState({ Vac_ID })
    }

    handleChangeDisease_Name = async event => {
        const Disease_Name = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ Disease_Name })
    }

    handleChangeVaccine_Name = async event => {
        const Vaccine_Name = event.target.value
        this.setState({ Vaccine_Name })
    }

    handleChangeNumber_of_Dose = async event => {
            const Number_of_Dose = event.target.value
            this.setState({ Number_of_Dose })
        }

    handleChangeStimulant = async event => {
            const Stimulant = event.target.value
            this.setState({ Stimulant })
        }

    handleChangeTarget_Group = async event => {
            const Target_Group = event.target.value
            this.setState({ Target_Group })
        }

    handleChangeNote = async event => {
            const Note = event.target.value
            this.setState({ Note })
        }

    handleIncludeMovie = async () => {
        const {  Vac_ID, Disease_Name, Vaccine_Name,Number_of_Dose,Stimulant,Target_Group,Note } = this.state

        const payload = { Vac_ID, Disease_Name, Vaccine_Name,Number_of_Dose,Stimulant,Target_Group,Note }

        await api.insertMovie(payload).then(res => {
            window.alert(`Vac inserted successfully`)
            this.setState({
                Vac_ID: '',
                Disease_Name: '',
                Vaccine_Name: '',
                Number_of_Dose: '',
                Stimulant: '',
                Target_Group: '',
                Note: ''
            })
        })
    }

    render() {
        const { Vac_ID, Disease_Name, Vaccine_Name,Number_of_Dose,Stimulant,Target_Group,Note } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>VaccineID: </Label>
                <InputText
                    type="text"
                    value={Vac_ID}
                    onChange={this.handleChangeVac_ID}
                />

                <Label>DiseasName: </Label>
                <InputText
                    type="text"

                    value={Disease_Name}
                    onChange={this.handleChangeDisease_Name}
                />

                <Label>VaccineName: </Label>
                <InputText
                    type="text"
                    value={Vaccine_Name}
                    onChange={this.handleChangeVaccine_Name}
                />

                <Label>Number of Dose: </Label>
                                <InputText
                                    type="text"
                                    value={Number_of_Dose}
                                    onChange={this.handleChangeNumber_of_Dose}
                                />

                <Label>Stimulant: </Label>
                                <InputText
                                    type="text"
                                    value={Stimulant}
                                    onChange={this.handleChangeStimulant}
                                />

                <Label>Target_Group: </Label>
                                <InputText
                                    type="text"
                                    value={Target_Group}
                                    onChange={this.handleChangeTarget_Group}
                                />

                <Label>Note: </Label>
                                <InputText
                                    type="text"
                                    value={Note}
                                    onChange={this.handleChangeNote}
                                />

                <Button onClick={this.handleIncludeMovie}>Add Vac</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default VacInsert

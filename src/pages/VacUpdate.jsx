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

class VacUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vaccineID: '', //name
            diseaseName: '', //rating
            vaccineName: '', // time
            noofDose: '',
            stimulant: '',
            targetGroup: '',
            note: '',
        }
    }

    handleChangevaccineID = async event => {
        const vaccineID = event.target.value
        this.setState({ vaccineID })
    }

    handleChangediseaseName = async event => {
            const diseaseName = event.target.value
            this.setState({ diseaseName })
        }

    handleChangevaccineName = async event => {
            const vaccineName = event.target.value
            this.setState({ vaccineName })
        }

    handleChangenoofDose = async event => {
            const noofDose = event.target.value
            this.setState({ noofDose })
        }

    handleChangestimulant = async event => {
            const stimulant = event.target.value
            this.setState({ stimulant })
        }

    handleChangetargetGroup = async event => {
            const targetGroup = event.target.value
            this.setState({ targetGroup })
        }

    handleChangenote = async event => {
            const note = event.target.value
            this.setState({ note })
        }


    handleUpdateMovie = async () => {
        const { id, vaccineID, diseaseName, vaccineName,noofDose,stimulant,targetGroup,note } = this.state

        const payload = { vaccineID, diseaseName, vaccineName,noofDose,stimulant,targetGroup,note  }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                vaccineID: '', //name
                diseaseName: '', //rating
                vaccineName: '', // time
                noofDose: '',
                stimulant: '',
                targetGroup: '',
                note: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            vaccineID: movie.data.data.Vac_ID,
            diseaseName: movie.data.data.Disease_Name,
            vaccineName: movie.data.data.Vaccine_Name,
            noofDose: movie.data.data.Number_of_Dose,
            stimulant: movie.data.data.Stimulant,
            targetGroup: movie.data.data.Target_Group,
            note: movie.data.data.Note


        })
    }

    render() {
        const { vaccineID, diseaseName, vaccineName,noofDose,stimulant,targetGroup,note } = this.state
        return (
            <Wrapper>
                <Title>Update Vaccine</Title>

                <Label>Vaccine ID: </Label>
                <InputText
                    type="text"
                    value={vaccineID}
                    onChange={this.handleChangevaccineID}
                />

                <Label>Disease Name: </Label>
                <InputText
                    type="text"
                    value={diseaseName}
                    onChange={this.handleChangediseaseName}
                />

                <Label>Vaccine Name: </Label>
                <InputText
                    type="text"
                    value={vaccineName}
                    onChange={this.handleChangevaccineName}
                />

                <Label>Number of Dose: </Label>
                <InputText
                    type="text"
                    value={noofDose}
                    onChange={this.handleChangenoofDose}
                />

                <Label>Stimulant: </Label>
                <InputText
                    type="text"
                    value={stimulant}
                    onChange={this.handleChangestimulant}
                />

                <Label>Target Group: </Label>
                <InputText
                    type="text"
                    value={targetGroup}
                    onChange={this.handleChangetargetGroup}
                />

                <Label>Note: </Label>
                <InputText
                    type="text"
                    value={note}
                    onChange={this.handleChangenote}
                />

                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default VacUpdate

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
            firstname: '',  //name
            lastname: '', //rating
            Note: '', //time
            referID: '',
        }
    }



    handleChangeFirstname = async event => {
        const firstname = event.target.value
        this.setState({ firstname })
    }

    handleChangeLastname = async event => {
        const lastname = event.target.value
        this.setState({ lastname })
    }

    handleChangeNote = async event => {
        const Note = event.target.value
        this.setState({ Note })
    }

    handleChangereferID = async event => {
            const referID = event.target.value
            this.setState({ referID })
        }



    handleIncludeMember = async () => {
        const {firstname, lastname,Note,referID  } = this.state

        const payload = {firstname, lastname,Note,referID }

        await api.addMember(payload).then(res => {
            window.alert(`Member inserted successfully`)
            this.setState({
                firstname: '',
                lastname: '',
                Note: '',
                referID: '',
            })
        })
    }

    render() {
        const { firstname, lastname, Note,referID } = this.state
        return (
            <Wrapper>
                <Title>Add Member</Title>

                <Label>Firstname: </Label>
                <InputText
                    type="text"
                    value={firstname}
                    onChange={this.handleChangeFirstname}
                />

                <Label>Lastname: </Label>
                <InputText
                    type="text"

                    value={lastname}
                    onChange={this.handleChangeLastname}
                />

                <Label>Note: </Label>
                <InputText
                    type="text"
                    value={Note}
                    onChange={this.handleChangeNote}
                />

                <Label>Refer ID: </Label>
                                <InputText
                                    type="text"
                                    value={referID}
                                    onChange={this.handleChangereferID}
                                />





                <Button onClick={this.handleIncludeMember}>Add Member</Button>
                <CancelButton href={'/family'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default VacInsert

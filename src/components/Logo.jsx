import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './VacLogo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://google.com">
                <img src={logo} width="100" height="50" alt="google.com" />
            </Wrapper>
        )
    }
}

export default Logo

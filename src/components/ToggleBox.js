import React, { Component } from "react";
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',

})`

    margin: 0 30px;
`

class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}

	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Close'+title;
		}else{
			title ='Open'+title;
		}

		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					{title}
				</div>
				{opened && (


					<div className="boxContent">
						{children}
					</div>

				)}
			</div>
		);
	}
}

export default ToggleBox;
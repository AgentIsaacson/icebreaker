import React, { Component } from "react";

export default class QuestionCard extends Component {
	render() {
		return (
			<div className="questionCard">
				Question:
				<br />
				{this.props.data}
			</div>
		);
	}
}

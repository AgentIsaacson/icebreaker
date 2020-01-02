import React, { Component } from "react";

export default class QuestionCard extends Component {
	render() {
		const onPress = this.props.onPress
		const data = this.props.data;

		return (
			<div className="questionCard" onClick={onPress}>
				<div className="questionText">{data}</div>
			</div>
		);
	}
}

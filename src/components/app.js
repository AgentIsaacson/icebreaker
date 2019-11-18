import React, { Component } from "react";
import QuestionContainer from "./questionContainer";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>IceBreaker App</h1>
				<QuestionContainer />
			</div>
		);
	}
}

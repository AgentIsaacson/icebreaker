import React, { Component } from "react";
import QuestionCard from "./questionCard";
import Header from "./header";

import * as data from "../../static/assets/questions.json";

export default class QuestionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(JSON.stringify(data)).Questions,
			activeQuestion: ""
		};
	}

	generateQuestion = () => {
		let newQuestion = this.state.data[
			Math.floor(Math.random() * this.state.data.length)
		];

		this.setState({ activeQuestion: newQuestion });
	};

	componentDidMount() {
		this.generateQuestion();
	}

	render() {
		return (
			<div
				className="questionContainer"
				/* onClick={this.generateQuestion} */
			>
				<Header />
				<QuestionCard
					className="questionCard"
					onPress={this.generateQuestion}
					data={this.state.activeQuestion}
				/>
				<div className="button questionButton" onClick={this.generateQuestion}>Next Question</div>
			</div>
		);
	}
}

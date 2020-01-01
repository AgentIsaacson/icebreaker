import React, { Component } from "react";
import QuestionCard from "./questionCard";

import * as data from "../../static/assets/questions.json";

export default class QuestionContainer extends Component {
	render() {
		let questions = JSON.parse(JSON.stringify(data)).Questions;
		let questionToDisplay = questions[Math.floor(Math.random() * questions.length)]
		console.log(questionToDisplay)
		return (
			<div className="question-container">
				<QuestionCard
					data={questionToDisplay}
				/>
			</div>
		);
	}
}

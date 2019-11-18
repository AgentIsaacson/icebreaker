import React, { Component } from "react";
import Question from "./question";

import * as data from '../../static/assets/questions.json';

export default class QuestionContainer extends Component {
	render() {
		let questions = JSON.parse(JSON.stringify(data)).Questions
		console.log(questions.length)
		let questionsArray = [];
		questions.reduce((prev, current) => {
			prev.push(current)
		});
		console.log(typeof(questionsArray));
		return (
			<div className="question-container">
				Questions go here
				{questions}
			</div>
		);
	}
}

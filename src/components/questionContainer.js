import React, { Component } from "react";
import Question from "./question";

import * as data from "../../static/assets/questions.json";

export default class QuestionContainer extends Component {
	render() {
		let questions = JSON.parse(JSON.stringify(data)).Questions;
		return (
			<div className="question-container">
				Questions go here
				{questions.map((data, index) => {
					return <div className="question">{data}</div>;
				})}
			</div>
		);
	}
}

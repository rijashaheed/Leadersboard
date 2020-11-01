import React, { Component } from "react";
import "./student.css";

class Student extends Component {
	constructor() {
		super();
		this.state = {
			scores: 0,
			success: false,
			failure: false,
		};
	}

	componentDidMount() {
		this.setState({
			scores: this.props.scores,
		});
	}

	addScore() {
		this.setState(
			{
				scores: this.state.scores + 1,
			},
			() => {
				if (this.state.scores >= 350) {
					this.setState({
						success: true,
						failure: false,
					});
				}
			}
		);
	}

	subScore() {
		this.setState(
			{
				scores: this.state.scores - 1,
			},
			() => {
				if (this.state.scores < 340) {
					this.setState({
						failure: true,
						success: false,
					});
				}
			}
		);
	}

	render() {
		const isSucess = this.state.success;
		const isFailure = this.state.failure;
		let text;
		if (isSucess) {
			text = <span className="success">Success</span>;
		} else if (isFailure) {
			text = <span className="failure">Failure</span>;
		} else {
			text = "";
		}

		return (
			<div className="student">
				<div className="left">
					<h2 className="studentName">
						{this.props.name}
						<button className="addScorebtn" onClick={() => this.addScore()}>
							+
						</button>
						<button className="addScorebtn" onClick={() => this.subScore()}>
							-
						</button>
					</h2>
					<p className="universityName">
						{this.props.university} {text}
					</p>
				</div>
				<div className="right">
					<div className="score">{this.state.scores}</div>
				</div>
			</div>
		);
	}
}

export default Student;

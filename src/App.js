import React, { Component } from "react";
import "./App.css";

const githubUserInfoURL = (githubUserName) =>
	`https://api.github.com/users/${githubUserName}`;

class App extends Component {
	state = {
		user: {},
		active: false
	};

	handleToggle = (event) => {
		console.log("was clicked");
		fetch(githubUserInfoURL("davegregg"))
			.then((response) => response.json())
			.then((responseBody) => {
				console.log(responseBody);
				this.setState({ user: responseBody });
			});
	}

	render() {
		return (
			<button onClick={this.handleToggle}>
				Toggle User View
			</button>
		);
	}
}

export default App;

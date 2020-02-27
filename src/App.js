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
		if (this.state.active === false) {
			fetch(githubUserInfoURL("iEdwinTorres"))
				.then((response) => response.json())
				.then((responseBody) => {
					console.log(responseBody);
					this.setState({
						user: responseBody,
						active: true
					});
				});
		} else {
			this.setState({ active: false });
		}
	};

	render() {
		return (
			<React.Fragment>
				<button onClick={this.handleToggle}>
					Toggle User View
				</button>
				{this.state.active && (
					<React.Fragment>
						<img
							src={this.state.user.avatar_url}
							alt="user profile"
						/>
						<h1>{this.state.user.name}</h1>
						<p>Bio: {this.state.user.bio}</p>
						<p>
							Followers: {this.state.user.followers}
						</p>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default App;

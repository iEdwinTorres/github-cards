import React, { Component } from "react";
import "./App.css";
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

const githubUserInfoURL = (githubUserName) =>
	`https://api.github.com/users/${githubUserName}`;

class App extends Component {
	state = {
		user: {},
		active: false
	};

	handleToggle = (event) => {
		if (this.state.active === false) {
			fetch(githubUserInfoURL("iedwintorres"))
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
				<Button onClick={this.handleToggle}>
					Toggle User View
				</Button>
				{this.state.active && (
					<React.Fragment>
						<Card>
							<Image src={this.state.user.avatar_url} />
							<Card.Content>
								<Card.Header>{this.state.user.name}</Card.Header>
								<Card.Meta>Bio: {this.state.user.bio}</Card.Meta>
							</Card.Content>
							<Card.Content extra>
      					
        						<Icon name='user' />
        							{this.state.user.followers} followers
      					
    						</Card.Content>
						</Card>
						
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default App;

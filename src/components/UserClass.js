import React from "react";

class UserClass extends React.Component {
	//in order to import a prop , you need a constructor
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {
				name: "John Doe",
				location: "America",
				login: "john-doe",
			},
		};

		console.log(this.props.name + " Child Constructor");
	}

	async componentDidMount() {
		console.log(this.props.name + " Child component ");

		//api call
		const response = await fetch("https://api.github.com/users/Strange-boy");
		const data = await response.json();

		console.log(data);

		//let's try to do a setInterval
		this.timer = setInterval(() => {
			console.log("Joel bhai op");
		}, 1000);

		this.setState({
			userInfo: data,
		});
	}

	//inorder to display once the component is updated
	componentDidUpdate() {
		console.log("component is updated!!");
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		console.log("Component is Unmounted!!");
	}

	render() {
		// const { name, location } = this.props;
		// const { name, location } = this.state.data;
		const { name, location, avatar_url, login } = this.state.userInfo;

		console.log(this.props.name + " Child Render");
		return (
			<div className="user-container">
				<img src={avatar_url} alt="Joel is here!!" />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: {login}</h4>
			</div>
		);
	}
}

export default UserClass;

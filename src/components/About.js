import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
//class based style of writing

class About extends Component {
	constructor(props) {
		super(props);

		//console.log("Parent Constructor");
	}

	async componentDidMount() {
		//console.log("parent component called");
	}

	render() {
		//console.log("Parent Render called!!");
		return (
			<div>
				<h1>Welcome to Jo's Kitchen</h1>
				<h2>Follow as on the social media handles to learn more</h2>
				{/* <UserClass name={"First"} location={"Panvel class"} /> */}
				<User name={"First"} location={"Panvel class"} />
			</div>
		);
	}
}

// const About = () => {
// 	return (
// 		<div>
// 			<h1>Welcome to Jo's Kitchen</h1>
// 			<h2>Follow as on the social media handles to learn more</h2>
// 			{/* <User name={"Joel Jacob (function)"} /> */}
// 			<UserClass name={"Joel Jacob (classy)"} location={"Panvel class"} />
// 		</div>
// 	);
// };

export default About;

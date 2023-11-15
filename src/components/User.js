import { useEffect, useState } from "react";

const User = ({ name }) => {
	const [count] = useState(0);
	const [count2] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log("Namaste React OP!!");
		}, 1000);

		return () => {
			console.log("Interval has been cleared");
			clearInterval(timer);
		};
	});

	return (
		<div className="user-container">
			<h2>Count = {count}</h2>
			<h2>Count2 = {count2}</h2>
			<h2>Name: {name}</h2>
			<h3>Location: Kerala</h3>
			<h4>Contact: Strange-boy</h4>
		</div>
	);
};

export default User;

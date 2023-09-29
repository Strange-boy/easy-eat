import { useState, useEffect } from "react";
import { LOGO_HEADER } from "../utils/constants";

//we would also require a header component
export const Header = () => {
	//lets try to create log button

	const [logButton, setLogButton] = useState("Login");
	console.log("Header rendered");

	useEffect(() => {
		console.log("UseEffect called!!");
	}, [logButton]);

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo-image" src={LOGO_HEADER} alt="restaurant logo" />
			</div>
			<div className="nav-container">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Contact us</li>
					<li>Cart</li>
					<button
						className="log-btn"
						onClick={() => {
							logButton === "Login"
								? setLogButton("Logout")
								: setLogButton("Login");
						}}
					>
						{logButton}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;

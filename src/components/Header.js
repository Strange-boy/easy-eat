import { useState, useEffect } from "react";
import { LOGO_HEADER } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//we would also require a header component
export const Header = () => {
	//lets try to create log button

	const [logButton, setLogButton] = useState("Login");
	const onlineStatus = useOnlineStatus();

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
					<li>Online status: {onlineStatus ? "✅" : "❎"}</li>
					<li>
						<Link className="header-links" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="header-links" to="/about">
							About us
						</Link>
					</li>
					<li>
						<Link className="header-links" to="/contact">
							Contact us
						</Link>
					</li>
					<li>
						<Link className="header-links" to="/grocery">
							Grocery
						</Link>
					</li>
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

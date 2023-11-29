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
		<div className="flex justify-between m-3 shadow-md">
			<div className="m-2">
				<img className="w-24" src={LOGO_HEADER} alt="restaurant logo" />
			</div>
			<div className="flex items-center text-xl font-bold">
				<ul className="flex p-2">
					<li className="pr-2 text-lg ">
						Online status: {onlineStatus ? "✅" : "❎"}
					</li>
					<li>
						<Link
							className="mx-1 px-2 text-lg hover:border-b-4 hover:border-indigo-500"
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="mx-1 px-2 text-lg hover:border-b-4 hover:border-indigo-500"
							to="/about"
						>
							About us
						</Link>
					</li>
					<li>
						<Link
							className="mx-1 px-2 text-lg hover:border-b-4 hover:border-indigo-500"
							to="/contact"
						>
							Contact us
						</Link>
					</li>
					<li>
						<Link
							className="mx-1 px-2 text-lg hover:border-b-4 hover:border-indigo-500"
							to="/grocery"
						>
							Grocery
						</Link>
					</li>
					<li className="">
						<Link
							className="mx-1 px-2 text-lg hover:border-b-4 hover:border-indigo-500"
							to="/"
						>
							Cart
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

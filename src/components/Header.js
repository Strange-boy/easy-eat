import { useContext } from "react";
import { LOGO_HEADER } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//we would also require a header component
export const Header = () => {
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);
	// console.log(loggedInUser);

	//we can use the selector to subscribe to the store
	const cartItems = useSelector((store) => store.cart.item);
	console.log(cartItems);

	return (
		<div className="flex justify-between m-3 shadow-md">
			<div className="m-2">
				<Link to="/">
					<img className="w-24" src={LOGO_HEADER} alt="restaurant logo" />
				</Link>
			</div>
			<div className="flex items-center text-xl font-bold">
				<ul className="flex p-2">
					<li className="pr-2 text-lg  text-gray-600 hover:text-gray-950">
						Online status: {onlineStatus ? "✅" : "❎"}
					</li>
					<li>
						<NavLink
							className="mx-1 px-2 text-lg text-gray-600 hover:text-gray-950  "
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className="mx-1 px-2 text-lg text-gray-600 hover:text-gray-950 "
							to="/about"
						>
							About us
						</NavLink>
					</li>
					<li>
						<NavLink
							className="mx-1 px-2 text-lg text-gray-600 hover:text-gray-950 "
							to="/contact"
						>
							Contact us
						</NavLink>
					</li>
					<li>
						<NavLink
							className="mx-1 px-2 text-lg text-gray-600 hover:text-gray-950 "
							to="/grocery"
						>
							Grocery
						</NavLink>
					</li>
					<li>
						<NavLink
							className="mx-1 px-2 text-lg text-gray-600 hover:text-gray-950"
							to="/"
						>
							Cart - ({cartItems.length} items)
						</NavLink>
					</li>
					<li>
						<NavLink
							className="mx-1 px-2 text-lg text-gray-600 font-bold hover:text-gray-950 "
							to="/"
						>
							{loggedInUser}
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

import { useContext } from "react";
import { LOGO_HEADER } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//in order to import the svg components
import CartIcon from "../svg/CartIcon";

//we would also require a header component
export const Header = () => {
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);
	// console.log(loggedInUser);

	//we can use the selector to subscribe to the store
	const cartItems = useSelector((store) => store.cart.item);
	console.log(cartItems);

	return (
		<div className="flex z-30 bg-slate-50 justify-between  mx-2 my-4 rounded-md shadow-sm sticky top-0">
			<div className="m-2">
				<Link to="/">
					<img
						className="w-20 hover:scale-110 hover:ease-in-out duration-500"
						src={LOGO_HEADER}
						alt="restaurant logo"
					/>
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
							className="mx-1 px-2 text-lg text-gray-600 hover:text-gray-950 relative"
							to="/cart"
						>
							<span className="inline-block mt-1 w-8">
								<CartIcon />
							</span>
							<span className="absolute right-2 bg-slate-600 text-white text-xs rounded-full font-semibold px-1">
								{cartItems.length}
							</span>
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

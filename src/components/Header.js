import { LOGO_HEADER } from "../utils/constants";

//we would also require a header component
export const Header = () => {
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
				</ul>
			</div>
		</div>
	);
};

export default Header;

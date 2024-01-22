import shoppingCart from "../../assets/shop_cart.jpg";

import { Link } from "react-router-dom";

const EmptyCart = () => {
	return (
		<>
			<div className="flex justify-center mt-20">
				<img src={shoppingCart} alt="shopping cart" className="w-96" />
			</div>
			<p className="flex justify-center text-xl font-semibold">
				Let's go shopping !!
			</p>
			<div className="flex justify-center">
				<button className="mt-4 p-2 bg-green-400 text-slate-800 font-bold rounded-lg shadow-md text-lg shadow-green-400/50">
					<Link to="/">Click Here</Link>
				</button>
			</div>
		</>
	);
};

export default EmptyCart;

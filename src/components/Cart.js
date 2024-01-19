import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux-files/cartSlice";
import CartItemCard from "./CartItemCard";

const Cart = () => {
	//here we need to subscribe to the store to show the total items present in the cart
	const cartItems = useSelector((store) => store.cart.item);

	//in order to dispatch an action
	const dispatch = useDispatch();

	//in order to clear the cart items
	const handleClearCart = () => {
		dispatch(clearCart(cartItems));
	};

	return (
		<>
			<div className="max-w-7xl mx-auto py-4 flex relative">
				<div className="w-3/5 mr-1">
					{/* heading of the shopping cart */}
					<div className="flex justify-between align-middle p-2 m-2 pb-4 border-dotted border-b-[1px] border-gray-400">
						<p className="text-xl font-semibold">
							Shopping Cart ({cartItems.length} items)
						</p>
						<button
							className="bg-slate-900 text-slate-100 p-2 rounded-lg font-semibold"
							onClick={handleClearCart}
						>
							Clear Cart
						</button>
					</div>
					<div className="p-2 m-2">
						{/* In order to display the content of the shopping cart */}
						{cartItems.length === 0 ? (
							<div>Please add some content to the cart </div>
						) : (
							cartItems.map((item) => (
								<CartItemCard key={item?.card?.info?.name} item={item} />
							))
						)}
					</div>
				</div>
				<div className="w-2/5 m-4 border-2 rounded-lg h-[26rem] sticky top-8">
					<div className="p-2 m-2 pb-4 border-solid border-b-2 border-gray-400">
						<p className="text-xl font-bold">Order summary</p>
					</div>
					<div className="px-2 py-2 mx-2 border-dotted border-b-[1px] border-gray-400">
						<p className="font-semibold text-lg pb-2">Bill details</p>
						<div className="flex justify-between">
							<div className="leading-6 text-slate-700">
								<p>Item total</p>
								<p>Delivery partner fee</p>
							</div>
							<div className="leading-6 flex-col justify-end">
								<p>₹ 210</p>
								<p>₹ 10</p>
							</div>
						</div>
					</div>
					<div className="px-2 pt-2 pb-4 mx-2 border-b-4 border-slate-700">
						<div className="flex justify-between">
							<div className="leading-6 text-slate-700">
								<p>Platform fees</p>
								<p>GST Charges</p>
							</div>
							<div className="leading-6 flex-col justify-end">
								<p>₹ 3</p>
								<p>₹ 5.5</p>
							</div>
						</div>
					</div>
					<div className="px-2 pt-2 pb-4 mx-2 border-b-4 border-slate-700">
						<div className="flex justify-between text-lg font-bold">
							<p>Total</p>
							<p>₹ 210</p>
						</div>
					</div>
					<div className="mt-6 flex justify-center">
						<button className="p-4 mx-auto text-xl bg-slate-800 text-slate-100 font-bold rounded-2xl hover:bg-slate-700">
							Proceed to Payment
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;

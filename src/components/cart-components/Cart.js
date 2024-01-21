import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/redux-files/cartSlice";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";

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
				{/* In case the cart is empty we would try to render a photo */}
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
				<OrderSummary />
			</div>
		</>
	);
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { clearCart, clearAmount } from "../../utils/redux-files/cartSlice";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import ClearCartAlert from "./ClearCartAlert";

const Cart = () => {
	//here we need to subscribe to the store to show the total items present in the cart
	const cartItems = useSelector((store) => store.cart.item);

	return (
		<div className="min-h-screen">
			{cartItems.length === 0 ? (
				<EmptyCart />
			) : (
				<div className="md:max-w-7xl mx-auto py-4 grid grid-cols-1 md:flex relative">
					{/* In case the cart is empty we would try to render a photo */}
					<div className="w-3/5 mr-1 ">
						{/* heading of the shopping cart */}
						<div className="flex justify-between align-middle p-2 m-2 pb-4 border-dotted border-b-[1px] border-gray-400">
							<p className="text-xl font-semibold">
								Shopping Cart ({cartItems.length} items)
							</p>
							<div>
								<ClearCartAlert />
							</div>
						</div>
						<div className="p-2 m-2 last:border-slate-200 last:border-b-4 ">
							{/* In order to display the content of the shopping cart */}
							{cartItems.map((item) => (
								<CartItemCard
									data-testid="itemsInCart"
									key={item?.card?.info?.name}
									item={item}
								/>
							))}
						</div>
					</div>
					<OrderSummary />
				</div>
			)}
		</div>
	);
};

export default Cart;

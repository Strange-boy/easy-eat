import { useState } from "react";
import MenuClassifier from "../MenuClassifier";

//svg
import IndianRupeeSign from "../../svg/IndianRupeeSign";
import CloseItem from "../../svg/CloseItem";

//url
import { CDN_URL } from "../../utils/constants";

//redux based commands
import { useDispatch } from "react-redux";
import {
	addItem,
	increaseAmount,
	decreaseAmount,
	removeItem,
} from "../../utils/redux-files/cartSlice";

//in order to import the toast component
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Button } from "../ui/button";

const CartItemCard = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const [cost, setCost] = useState(
		(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
	);

	//in order to dispatch an action
	const dispatch = useDispatch();

	//in order to display the toast message
	const { toast } = useToast();

	//we can destructure a lot of items here
	const { id, name, itemAttribute, price, defaultPrice, imageId } =
		item?.card?.info;

	const itemCost = (defaultPrice || price) / 100;

	//in order to components that are added
	console.log(item);

	//in order to count of items
	const handleIncreaseCount = () => {
		setQuantity(quantity + 1);
		setCost(cost + itemCost);
		dispatch(increaseAmount(itemCost));
	};

	//in order to add the items to the cart
	const handleAddItem = () => {
		//first we need to add the item
		dispatch(addItem(item));
		//then we need to update the store with the amount which is added back
		dispatch(increaseAmount(itemCost));

		toast({
			description: `${name} added back 🛒`,
		});
	};

	//function to define the toast when the item is removed
	const removeItemToast = () => {
		toast({
			title: `${name} removed`,
			description: "Don't worry, we won't judge if you change your mind 😉",
			action: (
				<Button onClick={handleAddItem} className="text-sm font-semibold">
					Undo
				</Button>
			),
		});
	};

	//when the quanity of content decreases
	const handleDecreaseCount = () => {
		if (quantity === 1) {
			dispatch(decreaseAmount(itemCost));
			dispatch(removeItem(id));
			removeItemToast();
			return;
		}

		setQuantity(quantity - 1);
		setCost(cost - itemCost);
		dispatch(decreaseAmount(itemCost));
	};

	//in order to handle when the cross button is closed
	const handleRemoveItem = () => {
		dispatch(decreaseAmount(cost));
		dispatch(removeItem(id));
		//in order to call the toast message when item is completely removed
		removeItemToast();
	};

	return (
		<div className="my-2 mx-4 pb-4 pt-2 border-b-4 border-gray-100 last:border-b-0 flex justify-between items-center">
			{/* details of each unique items */}
			{/* {console.log("inside each item", item)} */}

			{/* items details */}
			<div className="text-sm">
				<div className="w-5 pb-1">
					<MenuClassifier dishClass={itemAttribute} />
				</div>
				<div className="pb-1 font-bold text-base">{name}</div>
				<div className="flex items-center leading-5 pb-4 text-xs">
					<span className="pr-1">
						<IndianRupeeSign />
					</span>
					<span>{(price || defaultPrice) / 100}</span>{" "}
				</div>
				<div className="flex items-center pb-2 text-sm font-semibold">
					<p className="pr-2">Total Cost: </p>
					<span className="pr-1">
						<IndianRupeeSign />
					</span>
					<span>{cost.toFixed(2)}</span>{" "}
				</div>
			</div>
			{/* item image */}
			<div className="w-3/12 flex">
				<div className="w-2/3">
					<div className="flex justify-center">
						{imageId !== undefined ? (
							<img
								src={CDN_URL + imageId}
								alt="item-image"
								className="h-24 w-32 object-cover rounded-xl"
							/>
						) : null}
					</div>
					<div className="flex justify-center align-middle p-2">
						<button
							className="mx-2 py-3 px-4 bg-slate-50 text-base text-green-700 font-bold leading-3 shadow-lg rounded-md"
							onClick={handleDecreaseCount}
						>
							-
						</button>
						<p className="py-2 text-base text-green-700 font-bold leading-3">
							{quantity}
						</p>
						<button
							className="mx-2 py-2 px-4 bg-slate-50 text-base text-green-700 font-bold leading-3 shadow-lg rounded-md"
							onClick={handleIncreaseCount}
						>
							+
						</button>
					</div>
				</div>
				<div className="w-1/3 flex m-2 justify-center items-center">
					<button
						className="text-slate-700 hover:shadow-sm hover:shadow-slate-600/50"
						onClick={handleRemoveItem}
					>
						<CloseItem />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItemCard;

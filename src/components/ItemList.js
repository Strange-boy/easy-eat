//links
import { CDN_URL } from "../utils/constants";

// importing the svg
import IndianRupeeSign from "../svg/IndianRupeeSign";

//components
import MenuClassifier from "./MenuClassifier";

//redux imports
import { useDispatch } from "react-redux";
import { addItem, increaseAmount } from "../utils/redux-files/cartSlice";

//in order to import the toast from sonner
import { useToast } from "./ui/use-toast";

//this component displays all details of particular category
const ItemList = ({ itemCard }) => {
	const dispatch = useDispatch();
	const { toast } = useToast();

	//in order to handle the add items
	const handleAdditems = (item) => {
		dispatch(addItem(item));
		dispatch(
			increaseAmount(
				(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
			)
		);

		//in order to display a random message
		//in order to display some interesting messages to the user
		const cartMessages = [
			"That's your taste buds high-fiving you right now! ❤️",
			"Your cart is like a black hole for deliciousness. 🚀️",
			"Your fridge is jealous. Give it something to be jealous of. 💀",
			`Feeling adventurous? This ${item?.card?.info?.name} will take your taste buds on a trip! ✈️`,
			`That ${item?.card?.info?.name} looks perfect with your existing picks. You're a pro! ✨`,
			"Your cart is getting hungry... feed it more! 🐼",
			"Treat yo'self! (You deserve it.) 😇",
		];

		const randomIndex = Math.floor(Math.random() * cartMessages.length);

		toast({
			title: `${item?.card?.info?.name} 🛒`,
			description: `${cartMessages[randomIndex]}`,
		});
	};

	return (
		// veg icons
		<div>
			{itemCard.map((item) => (
				<div
					data-testid="itemList"
					key={item?.card?.info?.id}
					className="my-2 mx-4 pb-4 pt-2 border-b-4 border-gray-100 last:border-b-0 flex justify-between items-center"
				>
					{/* details of each unique items */}
					{/* {console.log("inside each item", item)} */}

					{/* items details */}
					<div className="text-sm">
						<div className="w-5 pb-1">
							<MenuClassifier dishClass={item?.card?.info?.itemAttribute} />
						</div>
						<div className="pb-1 font-bold text-base text-slate-700">
							{item?.card?.info?.name}
						</div>
						<div className="flex items-center leading-5 pb-2 text-sm ext-slate-700">
							<span className="pr-1">
								<IndianRupeeSign />
							</span>
							<span>
								{(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
									100}
							</span>{" "}
						</div>
						<div className="text-slate-500 text-sm">
							{item?.card?.info?.description}
						</div>
					</div>
					{/* item image */}
					<div className="w-2/12">
						{item?.card?.info?.imageId !== undefined ? (
							<img
								src={CDN_URL + item?.card?.info?.imageId}
								alt="item-image"
								className="h-24 w-32 object-cover rounded-xl"
							/>
						) : null}
						<button
							className="mx-9 py-3 px-4 mt-2 bg-slate-50 text-xs text-green-600 font-extrabold leading-3 shadow-lg rounded-md hover:bg-slate-50"
							onClick={() => {
								handleAdditems(item);
							}}
						>
							ADD
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;

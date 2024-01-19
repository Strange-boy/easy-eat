import { useState } from "react";
import MenuClassifier from "./MenuClassifier";

//svg
import IndianRupeeSign from "../svg/IndianRupeeSign";

//url
import { CDN_URL } from "../utils/constants";

const CartItemCard = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const [cost, setCost] = useState(
		(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
	);

	//we can destructure a lot of items here
	const { name, itemAttribute, price, defaultPrice, imageId } =
		item?.card?.info;

	//in order to components that are added
	console.log(item);

	//in order to count of items
	const handleIncreaseCount = () => {
		setQuantity(quantity + 1);
		setCost(cost + (price || defaultPrice) / 100);
	};

	const handleDecreaseCount = () => {
		setQuantity(quantity - 1);
		setCost(cost - (price || defaultPrice) / 100);
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
					<span>{cost}</span>{" "}
				</div>
			</div>
			{/* item image */}
			<div className="w-2/12">
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
		</div>
	);
};

export default CartItemCard;

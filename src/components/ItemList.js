//links
import { CDN_URL } from "../utils/constants";

// importing the svg
import IndianRupeeSign from "../svg/IndianRupeeSign";

//components
import MenuClassifier from "./MenuClassifier";

const ItemList = ({ data }) => {
	// console.log("items", data);
	//details of all the items
	const {
		name,
		description,
		price,
		defaultPrice,
		itemAttribute,
		showImage,
		imageId,
	} = data?.card?.info;
	// console.log(itemAttribute?.vegClassifier);
	console.log(name, data);
	// console.log(imageId);

	return (
		// veg icons
		<div className="my-2 mx-4 pb-4 pt-2 border-b-4 border-gray-100 last:border-b-0 flex justify-between items-center">
			{/* items details */}
			<div className="text-sm">
				<div className="w-5 pb-1">
					<MenuClassifier dishClass={itemAttribute} />
				</div>
				<div className="pb-1 font-bold">{name}</div>
				<div className="flex items-center leading-5 pb-2 text-xs">
					<span className="pr-1">
						<IndianRupeeSign />
					</span>
					<span>{(price || defaultPrice) / 100}</span>{" "}
				</div>
				<div className="font-light">{description}</div>
			</div>
			{/* item image */}
			<div className="w-2/12">
				{imageId !== undefined ? (
					<img
						src={CDN_URL + imageId}
						alt="item-image"
						className="h-24 w-32 object-cover rounded-xl"
					/>
				) : null}
				<button className="mx-9 py-1 px-3 bg-slate-50 text-sm text-green-700 font-bold leading-3 shadow-lg rounded-md">
					ADD
				</button>
			</div>
		</div>
	);
};

export default ItemList;

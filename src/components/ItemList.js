// importing the svg
import IndianRupeeSign from "../svg/IndianRupeeSign";

//components
import MenuClassifier from "./MenuClassifier";

const ItemList = ({ data }) => {
	// console.log("items", data);
	//details of all the items
	const { name, description, price, defaultPrice, itemAttribute } =
		data?.card?.info;
	// console.log(itemAttribute?.vegClassifier);
	console.log(name, data);

	return (
		// veg icons
		<div className="my-2 mx-4 pb-4 pt-2 border-b-4 border-gray-100 last:border-b-0">
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
		</div>
	);
};

export default ItemList;

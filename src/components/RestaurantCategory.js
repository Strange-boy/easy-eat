import { useState } from "react";
import ItemList from "./ItemList";

//in order to import the svg
import DownArrow from "../svg/DownArrow";
import UpArrow from "../svg/UpArrow";

const RestaurantCategory = ({ data }) => {
	const [showItems, setShowItems] = useState(false);
	// console.log("inside:", data);
	const { itemCards } = data;

	//in order to handle the click event
	const handleClick = () => {
		// console.log("clicked");
		setShowItems(!showItems);
	};

	return (
		<div className="w-full bg-inheritb border-b-8 border-gray-200">
			{/* Header item */}
			<div
				className="my-2 mx-4  flex justify-between py-3 items-center cursor-pointer"
				onClick={handleClick}
			>
				<span className="font-bold text-base leading-3">
					{data?.title} ({data?.itemCards?.length})
				</span>
				<span>{showItems ? <UpArrow /> : <DownArrow />} </span>
			</div>
			{/* item list */}
			{showItems === true ? (
				<div className="">
					{itemCards.map((item, idx) => (
						<ItemList data={item} key={idx} />
					))}
				</div>
			) : null}
		</div>
	);
};

export default RestaurantCategory;

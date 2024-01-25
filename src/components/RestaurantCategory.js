import { useState } from "react";
import ItemList from "./ItemList";

//in order to import the svg
import DownArrow from "../svg/DownArrow";
import UpArrow from "../svg/UpArrow";

//this component consists of header and accordion
const RestaurantCategory = ({ data, showItems, setExpandIndex, index }) => {
	const [click, setClick] = useState(false);
	// console.log("inside:", data);
	const { itemCards } = data;

	//here we are trying to life the state up
	//in order to handle the click event
	const handleClick = () => {
		setClick(!click);
		setExpandIndex(click ? null : index);
	};

	return (
		<div className="w-full bg-inheritb border-b-8 border-gray-200">
			{/* Header item */}
			<div
				className="my-2 mx-4  flex justify-between py-3 items-center cursor-pointer"
				onClick={handleClick}
			>
				<span className="font-bold text-lg leading-3">
					{data?.title} ({data?.itemCards?.length})
				</span>
				<span>{showItems ? <UpArrow /> : <DownArrow />} </span>
			</div>

			{/* item list */}
			{showItems && <ItemList itemCard={data?.itemCards} />}
		</div>
	);
};

export default RestaurantCategory;

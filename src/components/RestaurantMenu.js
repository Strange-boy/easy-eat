import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_CATEGORY_LIST } from "../utils/constants";
import useRestaurantMenu from "../utils/custom-hooks/useRestaurantMenu";

//importing the components
import RestaurantCategory from "./RestaurantCategory";

//importing shadcn components
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

//importing the svg's
import DeliveryTime from "../svg/DeliveryTime";
import IndianRupeeSymbol from "../svg/IndianRupees";
import RatingSvg from "../svg/RatingSvg";
import { useState } from "react";

const RestaurantMenu = () => {
	const [expandIndex, setExpandIndex] = useState(null);
	const [vegOnly, setVegOnly] = useState(false);
	console.log(vegOnly);

	const { id } = useParams();

	//here a custom hook is used
	const restroInfo = useRestaurantMenu(id);
	// console.log("Restro info:", restroInfo);

	if (restroInfo === null) return <Shimmer />;

	const {
		name,
		costForTwoMessage,
		cuisines,
		avgRating,
		areaName,
		sla,
		totalRatingsString,
	} = restroInfo?.data?.cards[0]?.card?.card?.info;

	const { itemCards } =
		restroInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
			?.card?.card;

	const categories =
		restroInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

	const itemCategories = categories.filter(
		(category) => category?.card?.card?.["@type"] === ITEM_CATEGORY_LIST
	);

	//in order to filter the veg items in the menu
	const filterVegItems = (category) => {
		//inside the item category list
		const vegCategory = category?.card?.card?.itemCards.filter(
			(item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
		);

		// console.log("Veg Items list", vegCategory);
		return vegCategory;
	};

	return (
		<>
			<div className="max-w-3xl mx-auto py-4 min-h-screen">
				{/* all the restaurant details */}
				<div className="flex justify-between mx-4 pb-6 border-dotted border-b-[2px] border-gray-400">
					<div>
						<h2 className="text-xl font-bold mb-2">{name}</h2>
						<h4 className="text-sm font-normal text-gray-600 mb-1">
							{cuisines.join(", ")}
						</h4>
						<div className="text-sm font-normal text-gray-600">
							<span>{areaName}, </span>
							<span>{sla?.lastMileTravel}</span>
						</div>
					</div>
					<div className="border-dotted border-[1px] border-gray-400 px-2">
						<div className="font-extrabold py-2 text-md text-green-600 border-dotted border-b-[1px] border-gray-400 flex items-center">
							<span className="pr-1">
								<RatingSvg />
							</span>
							<div>{avgRating}</div>
						</div>
						<p className="text-xs py-2 text-gray-500">{totalRatingsString}</p>
					</div>
				</div>
				<div className="my-4 mx-4 pb-4 flex items-center border-dotted border-b-2 border-gray-400">
					<div className="pr-4 flex items-center">
						<DeliveryTime />
						<p className="px-2 text-base font-extrabold text-slate-800">
							{sla?.deliveryTime} mins
						</p>
					</div>
					<div className="flex items-center">
						<IndianRupeeSymbol />
						<p className="px-2 text-base font-extrabold text-slate-800">
							{costForTwoMessage}
						</p>
					</div>
				</div>
				{/* switch inorder to show the veg items only */}
				<div className="mx-4 pt-6 pb-6 border-solid border-b-[2px] border-gray-400">
					<div className="flex items-center space-x-2">
						<Switch
							id="vegItems"
							onCheckedChange={() => {
								setVegOnly(!vegOnly);
							}}
						/>
						<Label htmlFor="vegItems" className="text-base font-semibold">
							Veg Only
						</Label>
					</div>
				</div>
				{/* all the restaurant menu details */}
				<div>
					{itemCategories.map((category, index) => {
						//in order to filter the veg items
						const filteredList =
							vegOnly == true
								? filterVegItems(category)
								: category?.card?.card?.itemCards;

						//in order to find the heading of the category
						const categoryHeading = category?.card?.card?.title;

						//this is a controlled component
						console.log("length", filteredList.length);

						return filteredList.length === 0 ? (
							<></>
						) : (
							<RestaurantCategory
								key={categoryHeading}
								title={categoryHeading}
								items={filteredList}
								showItems={index === expandIndex ? true : false}
								setExpandIndex={(index) => setExpandIndex(index)}
								index={index}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RestaurantMenu;

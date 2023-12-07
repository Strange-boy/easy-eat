import DownArrow from "../svg/DownArrow";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
	// console.log("inside:", data);
	const { itemCards } = data;

	return (
		<div className="w-full bg-inheritb border-b-8 border-gray-200">
			{/* Header item */}
			<div className="my-2 mx-4  flex justify-between py-3 items-center">
				<span className="font-bold text-base leading-3">
					{data?.title} ({data?.itemCards?.length})
				</span>
				<span>
					<DownArrow />
				</span>
			</div>
			{/* item list */}
			<div className="">
				{itemCards.map((item) => (
					<ItemList data={item} />
				))}
			</div>
		</div>
	);
};

export default RestaurantCategory;

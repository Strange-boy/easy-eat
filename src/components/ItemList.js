//links
import { CDN_URL } from "../utils/constants";

// importing the svg
import IndianRupeeSign from "../svg/IndianRupeeSign";

//components
import MenuClassifier from "./MenuClassifier";

//redux imports
import { useDispatch } from "react-redux";
import { addItem, increaseAmount } from "../utils/redux-files/cartSlice";

//this component displays all details of particular category
const ItemList = ({ itemCard }) => {
	const dispatch = useDispatch();

	//in order to handle the add items
	const handleAdditems = (item) => {
		dispatch(addItem(item));
		dispatch(
			increaseAmount(
				(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
			)
		);
	};

	return (
		// veg icons
		<div>
			{itemCard.map((item) => (
				<div
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
						<div className="pb-1 font-bold">{item?.card?.info?.name}</div>
						<div className="flex items-center leading-5 pb-2 text-xs">
							<span className="pr-1">
								<IndianRupeeSign />
							</span>
							<span>
								{(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
									100}
							</span>{" "}
						</div>
						<div className="font-light">{item?.card?.info?.description}</div>
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
							className="mx-9 py-3 px-4 bg-slate-50 text-xs text-green-700 font-bold leading-3 shadow-lg rounded-md"
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

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_CATEGORY_LIST } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//importing the components
import RestaurantCategory from "./RestaurantCategory";

//importing the svg's
import DeliveryTime from "../svg/DeliveryTime";
import IndianRupeeSymbol from "../svg/IndianRupees";
import RatingSvg from "../svg/RatingSvg";

const RestaurantMenu = () => {
	// const [restroInfo, setRestroInfo] = useState(null);
	// const [fullMenu, setFullMenu] = useState(null);

	// //in order to showcase the veg restaurant
	// const [vegItems, setVegItems] = useState(null);

	const { id } = useParams();

	const restroInfo = useRestaurantMenu(id);

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

	console.log(restroInfo?.data?.cards[0]?.card?.card?.info);

	const { itemCards } =
		restroInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
			?.card?.card;

	const categories =
		restroInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

	const itemCategories = categories.filter(
		(category) => category?.card?.card?.["@type"] === ITEM_CATEGORY_LIST
	);

	console.log(itemCategories);

	return (
		<div className="max-w-3xl mx-auto py-4">
			{/* all the restaurant details */}
			<div className="flex justify-between mx-4 pb-6 border-dotted border-b-[1px] border-gray-400">
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
				<div className="border-dotted border-2 border-gray-400 px-2">
					<div className="font-extrabold py-2 text-sm text-green-600 border-dotted border-b-[1px] border-gray-400 flex items-center">
						<span className="pr-1">
							<RatingSvg />
						</span>
						<div>{avgRating}</div>
					</div>
					<p className="text-xs py-2 text-gray-500">{totalRatingsString}</p>
				</div>
			</div>
			<div className="my-4 mx-4 pb-4 flex items-center border-dotted border-b-[1px] border-gray-400">
				<div className="pr-4 flex items-center">
					<DeliveryTime />
					<p className="px-2 text-sm font-bold">{sla?.deliveryTime} mins</p>
				</div>
				<div className="flex items-center">
					<IndianRupeeSymbol />
					<p className="px-2 text-sm font-bold">{costForTwoMessage}</p>
				</div>
			</div>
			{/* all the restaurant menu details */}
			<div>
				{itemCategories.map((category, idx) => (
					<RestaurantCategory key={idx} data={category?.card?.card} />
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	// const [restroInfo, setRestroInfo] = useState(null);
	// const [fullMenu, setFullMenu] = useState(null);

	// //in order to showcase the veg restaurant
	// const [vegItems, setVegItems] = useState(null);

	const { id } = useParams();

	const restroInfo = useRestaurantMenu(id);

	if (restroInfo === null) return <Shimmer />;

	const { name, costForTwoMessage, cuisines, avgRating } =
		restroInfo?.data?.cards[0]?.card?.card?.info;

	const { itemCards } =
		restroInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
			?.card?.card;
	console.log(restroInfo);
	console.log(itemCards);

	return (
		<div className="container">
			<h2>Name of the Restaurant: {name}</h2>
			<h3>Cost for Two: {costForTwoMessage}</h3>
			<h3>Average rating: {avgRating}</h3>
			<h4>Cuisines: {cuisines.join(",")}</h4>
			<h3>List of content available:</h3>

			<div className="item-list">
				<h2>Menu</h2>
				<ul>
					{itemCards.map((item) => (
						<li key={item.card.info.id}>
							{item?.card?.info?.name} - Rs {item?.card?.info?.price}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;

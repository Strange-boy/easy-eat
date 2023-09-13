import restaurantList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";

//now we would try to create a body component
const Body = () => {
	return (
		<div className="body">
			<div className="search-bar">Search bar</div>
			<div className="restro-container">
				{/* we would use a container for individual restaurant cards */}
				{restaurantList.map((restaurant) => (
					<RestaurantCards key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;

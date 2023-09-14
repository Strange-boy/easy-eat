import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";

//now we would try to create a body component
const Body = () => {
	//here we would use the super charged react variables to dynamically render the components
	const [restFilter, setRestFilter] = useState(restaurantList);

	//these are the normal javascript variables
	let restaurantFilter = restaurantList;

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						console.log("Before items", restaurantList);
						const topRestaurant = restFilter.filter((rest) => {
							return rest.info.avgRating >= 4;
						});

						// console.log(topRestaurant);
						setRestFilter(topRestaurant);
					}}
				>
					Top Restaurant
				</button>
			</div>
			<div className="restro-container">
				{/* we would use a container for individual restaurant cards */}
				{restFilter.map((restaurant) => (
					<RestaurantCards key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;

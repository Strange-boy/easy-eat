import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

//now we would try to create a body component
const Body = () => {
	//here we would use the super charged react variables to dynamically render the components
	const [currRestaurant, setCurrRestaurant] = useState([]);

	//we are going to learn about useEffect
	useEffect(() => {
		fetchData();
	}, []);

	//function to fetch the data
	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);

		const jsonData = await data.json();
		console.log(jsonData);

		// console.log(
		// 	jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
		// );

		const liveRestaurant = jsonData.data.cards;

		liveRestaurant.forEach((restaurant) => {
			if (restaurant.card.card.id === "restaurant_grid_listing") {
				setCurrRestaurant(
					restaurant.card.card.gridElements.infoWithStyle.restaurants
				);
			}
		});

		console.log(currRestaurant);

		// setCurrRestaurant(
		// 	jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
		// );
	};

	if (currRestaurant.length === 0) {
		return <Shimmer />;
	}

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						console.log("Before items", currRestaurant);
						const topRestaurant = currRestaurant.filter((rest) => {
							return rest.info.avgRating >= 4;
						});

						// console.log(topRestaurant);
						setCurrRestaurant(topRestaurant);
					}}
				>
					Top Restaurant
				</button>
			</div>
			<div className="restro-container">
				{/* we would use a container for individual restaurant cards */}
				{currRestaurant.map((restaurant) => (
					<RestaurantCards key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;

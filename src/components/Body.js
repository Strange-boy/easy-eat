import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

//now we would try to create a body component
const Body = () => {
	//here we would use the super charged react variables to dynamically render the components
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	console.log("Body renders");

	//we are going to learn about useEffect
	useEffect(() => {
		fetchData();
	}, []);

	//function to fetch the data
	const fetchData = async () => {
		const response = await fetch(SWIGGY_API);

		const jsonData = await response.json();
		// console.log(jsonData);

		// console.log(
		// 	jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
		// );

		const liveRestaurant = jsonData?.data?.cards;

		liveRestaurant.forEach((restaurant) => {
			if (restaurant.card.card.id === "restaurant_grid_listing") {
				setListOfRestaurant(
					restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants
				);

				setFilteredRestaurant(
					restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants
				);
			}
		});

		// setListOfRestaurant(
		// 	jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
		// );
	};

	//conditional rendering
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search-container">
					<input
						type="text"
						className="search-box"
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							//Filter the restaurant and display them according to the name
							console.log(searchValue);

							const restaurantList = listOfRestaurant.filter((restro) => {
								return restro.info.name
									.toLowerCase()
									.includes(searchValue.toLowerCase());
							});

							setFilteredRestaurant(restaurantList);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						// console.log("Before items", listOfRestaurant);
						const topRestaurant = listOfRestaurant.filter((rest) => {
							return rest.info.avgRating >= 4;
						});

						// console.log(topRestaurant);
						setFilteredRestaurant(topRestaurant);
					}}
				>
					Top Restaurant
				</button>
			</div>
			<div className="restro-container">
				{/* we would use a container for individual restaurant cards */}
				{filteredRestaurant.map((restaurant) => (
					<RestaurantCards key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;

import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//now we would try to create a body component
const Body = () => {
	//here we would use the super charged react variables to dynamically render the components
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	// console.log("Body renders");

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

	//in order to display the online status
	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false)
		return <h1>OOps!! Seems like you went offline XD</h1>;

	//conditional rendering
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter flex justify-center my-2">
				<div className="">
					<input
						type="text"
						className="px- 3 border-2 rounded-full border-indigo-400"
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<button
						className="mx-2 px-2 py-0 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg text-stone-50 font-semibold"
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
					className="mx-1 px-1 py-0 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg text-stone-50 font-semibold"
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
			<div className="flex flex-wrap mx-auto w-4/5 ">
				{/* we would use a container for individual restaurant cards */}
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"restaurant/" + restaurant.info.id}
						className="mx-auto"
					>
						<RestaurantCards resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;

import { useState, useEffect, useContext } from "react";
import RestaurantCards, { withBestSellingRestro } from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import useRestaurantData from "../utils/custom-hooks/useRestaurantData";

//now we would try to create a body component
const Body = () => {
	//here we would use the super charged react variables to dynamically render the components
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	//in order to display the best selling restaurant (Higher order components)
	const BestRestaurantCards = withBestSellingRestro(RestaurantCards);

	//we are going to learn about useEffect
	useEffect(() => {
		fetchData();
	}, []);

	//function to fetch the data
	const fetchData = async () => {
		const response = await fetch(SWIGGY_API);
		const jsonData = await response.json();

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
	};

	//conditional rendering
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter flex justify-center my-6">
				<div className="">
					<input
						type="text"
						className="px- 3 border-2 rounded-full border-gray-500"
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<button
						className="mx-2 px-2 py-1 bg-gray-500 hover:bg-gray-800 rounded-xl shadow-lg text-stone-50 font-semibold"
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
					className="mx-1 px-2 py-0 bg-gray-500 hover:bg-gray-800 rounded-lg shadow-lg text-stone-50 font-semibold"
					onClick={() => {
						// console.log("Before items", listOfRestaurant);
						const topRestaurant = listOfRestaurant.filter((rest) => {
							return rest.info.avgRating >= 4.5;
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
				{filteredRestaurant.map((restaurant) => {
					return (
						<Link
							key={restaurant.info.id}
							to={"restaurant/" + restaurant.info.id}
							className="mx-auto"
						>
							{/* { logic to write the restaurant whether it is a best seller or not} */}
							{restaurant.info.avgRating > 4.3 ? (
								<BestRestaurantCards resData={restaurant} />
							) : (
								<RestaurantCards resData={restaurant} />
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;

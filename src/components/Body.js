import { useState, useEffect, useContext } from "react";
import RestaurantCards, { withBestSellingRestro } from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//in order to import shadcn components
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchIcon from "../svg/SearchIcon";

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

	//in order to handle the search functionality
	const handleSearchFunction = () => {
		//Filter the restaurant and display them according to the name
		console.log(searchValue);

		const restaurantList = listOfRestaurant.filter((restro) => {
			return restro.info.name.toLowerCase().includes(searchValue.toLowerCase());
		});

		setFilteredRestaurant(restaurantList);
	};

	//on order to handle while pressing any keys
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			// Perform actions when Enter is pressed
			handleSearchFunction();
		}
	};

	//conditional rendering
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="min-h-screen">
			<div className="filter flex justify-center my-6">
				<div className="flex gap-1 justify-center">
					<Input
						type="text"
						placeholder="Favourite Restro..."
						className="w-60 text-base"
						value={searchValue}
						onKeyPress={(e) => {
							handleKeyPress(e);
						}}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<Button
						className="text-base font-semibold"
						onClick={handleSearchFunction}
					>
						<span className="inline-block">
							<SearchIcon />
						</span>
					</Button>
				</div>
			</div>
			<div></div>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mx-auto w-4/5">
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

import { useState, useEffect, useMemo } from "react";
import RestaurantCards, { withBestSellingRestro } from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//in order to import shadcn components
import { Input } from "./ui/input";
import SearchIcon from "../svg/SearchIcon";

//in order to provide the debounce functionality
import useDebounce from "../utils/custom-hooks/useDebounce";

//now we would try to create a body component
const Body = () => {
	//here we would use the super charged react variables to dynamically render the components
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
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
			}
		});
	};

	//in order to debounce the searching
	const debouncedSearchQuery = useDebounce(searchValue, 300);

	//in order to find the filtered restaurant
	const filteredRestaurant = useMemo(() => {
		return listOfRestaurant.filter((restaurant) => {
			return restaurant?.info?.name
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
	}, [listOfRestaurant, debouncedSearchQuery]);

	//conditional rendering
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="min-h-screen">
			<div className="filter flex justify-center my-6">
				<div className="flex gap-1 justify-center relative">
					<Input
						data-testid="searchInput"
						type="search"
						placeholder="Favourite Restro..."
						className="text-base pl-10"
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<span className="inline-block absolute left-2 inset-y-1">
						<SearchIcon />
					</span>
				</div>
			</div>
			<div></div>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-2  mx-auto w-4/5">
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

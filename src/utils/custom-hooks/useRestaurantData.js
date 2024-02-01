import { useEffect, useState } from "react";

//in order to import swiggy api
import { SWIGGY_API } from "../constants";
import axios from "axios";

const useRestaurantData = () => {
	const [restaurantData, setRestaurantData] = useState(null);

	useEffect(() => {
		fetchRestaurantData();
	}, []);

	const fetchRestaurantData = async () => {
		const response = await axios.get(SWIGGY_API);
		setRestaurantData(response.data);
		const liveRestaurant = response?.data?.data?.cards;

		liveRestaurant.forEach((restaurant) => {
			if (restaurant.card.card.id === "restaurant_grid_listing") {
				setRestaurantData(
					restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants
				);
			}
		});
	};

	return restaurantData;
};

export default useRestaurantData;

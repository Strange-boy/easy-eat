import { useEffect, useState } from "react";
import {
	SWIGGY_RESTRO_MENU_P1,
	SWIGGY_RESTRO_MENU_P2,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const [restroInfo, setRestroInfo] = useState(null);
	const [fullMenu, setFullMenu] = useState(null);
	//in order to showcase the veg restaurant
	const [vegItems, setVegItems] = useState(null);

	const { id } = useParams();

	// console.log(id);
	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const response = await fetch(
			SWIGGY_RESTRO_MENU_P1 + id + SWIGGY_RESTRO_MENU_P2
		);

		//convert the data to json format
		const jsonData = await response.json();

		console.log("inside the restro menu");
		console.log(jsonData);

		setRestroInfo(jsonData);
		setVegItems(
			jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
				?.card?.card?.itemCards
		);

		const menuData =
			jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

		// console.log(menuData.length);
		const menuItems = [];

		console.log("Menu items:");
		for (let idx = 1; idx < menuData.length - 2; idx += 1) {
			// console.log(menuData[idx]);
			menuItems.push(menuData[idx]);
		}

		setFullMenu(menuItems);
		setVegItems(menuItems);

		// const itemInfo =
		// 	jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
	};

	if (vegItems === null) return <Shimmer />;

	const { name, costForTwoMessage, cuisines, avgRating } =
		restroInfo?.data?.cards[0]?.card?.card?.info;

	return (
		<div className="container">
			<h2>Name of the Restaurant: {name}</h2>
			<h3>Cost for Two: {costForTwoMessage}</h3>
			<h3>Average rating: {avgRating}</h3>
			<h4>Cuisines: {cuisines.join(",")}</h4>
			<h3>List of content available:</h3>
			<button
				className="btn-vegOnly"
				onClick={() => {
					// const allVegItems = vegItems.filter((item) => {
					// 	return item?.card?.info?.isVeg === 1;
					// });

					//in order to filter out the vegetable items
					const allVegItems = fullMenu.map((menu) => {
						const { itemCards } = menu?.card?.card;
						return itemCards.filter((item) => {
							return item?.card?.info?.isVeg === 1;
						});
						//now we need to map over the entire list of elements
					});

					console.log("all veg items:");
					console.log(allVegItems);

					setVegItems(allVegItems);
				}}
			>
				Veg Only
			</button>
			<ul>
				{/* {vegItems.map((items) => {
					return (
						<li key={items?.card?.info?.id}>
							{items?.card?.info?.name} - {items?.card?.info?.price / 100}
						</li>
					);
				})} */}

				{fullMenu.map((menu) => {
					{
						/* const { itemCards, title } = menu?.card?.card; */
					}
					return (
						<>
							<h2>{menu?.card?.card?.title}</h2>
							{menu?.card?.card?.itemCards.map((items) => {
								return (
									<li key={items?.card?.info?.id}>
										{items?.card?.info?.name} - {items?.card?.info?.price / 100}
									</li>
								);
							})}
						</>
					);
				})}
				<li>
					{/* {fullMenu[0]?.card?.card?.itemCards[0]?.card?.info?.name} */}
					{/* = Price:{" "} {itemCards[0]?.card?.info?.price / 100} */}
				</li>
			</ul>
		</div>
	);
};

export default RestaurantMenu;

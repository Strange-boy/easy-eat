import { useContext } from "react";
import { CDN_URL } from "../../src/utils/constants";

import RatingSvg from "../svg/RatingSvg";
// import UserContext from "../utils/UserContext";

//now we would use restaurant cards to call each of the restaurants
const RestaurantCards = (props) => {
	// console.log(props);
	const { resData } = props;
	console.log("Restro data", resData);
	// const { loggedInUser } = useContext(UserContext);

	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		costForTwo,
		sla,
		areaName,
	} = resData.info;

	return (
		<div className="m-2 p-2 w-[340px] hover:shadow-xl hover:scale-105 hover:ease-in duration-300 ">
			<div className="restro-card" data-testid="restroCards">
				<img
					className="h-64 w-full rounded-2xl object-cover"
					src={CDN_URL + cloudinaryImageId}
					alt={name + "-image"}
				/>
				<div className="mt-2 mx-1 text-gray-700">
					<h3 className="font-bold text-lg leading-6">{name}</h3>
					<div className="flex">
						<span className="font-bold text-sm flex items-center">
							<p className="pr-1">
								<RatingSvg />
							</p>
							<div>{avgRating} </div>
							<p className="font-extrabold">.</p>
						</span>
						<span className="font-bold text-sm ml-1">
							{sla.deliveryTime} mins
						</span>
					</div>

					<h4 className=" font-light truncate">{cuisines.join(", ")}</h4>
					<h4 className="font-light">{areaName}</h4>
				</div>
			</div>
		</div>
	);
};

//Higher Order Component => Contract: Display the best selling restaurant
//input => restaurant list
//output => restaurant with rating > 4 with best seller badge

export const withBestSellingRestro = (RestaurantCards) => {
	return (props) => {
		return (
			<div>
				<label
					
					htmlFor=""
					className="absolute z-10 bg-green-600 m-2 p-2 font-semibold text-slate-100 rounded-e-lg hover:scale-105 hover:ease-in duration-300"
				>
					Best Seller
				</label>
				<RestaurantCards {...props} />
			</div>
		);
	};
};

export default RestaurantCards;

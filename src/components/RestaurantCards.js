import { CDN_URL } from "../../src/utils/constants";

//now we would use restaurant cards to call each of the restaurants
const RestaurantCards = (props) => {
	console.log(props);
	const { resData } = props;

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
		<div className="m-2 p-2 w-80 hover:shadow-xl hover:scale-105 hover:ease-in duration-300 ">
			<div
				className="restro-card"
				style={{
					backgroundColor: "#f0f0f0",
				}}
			>
				<img
					className="h-72 w-full rounded-lg object-cover"
					src={CDN_URL + cloudinaryImageId}
					alt={name + "-image"}
				/>
				<div className="mt-2 mx-1">
					<h3 className="font-bold text-lg">{name}</h3>
					<div>
						<span className="font-bold text-lg">⭐ {avgRating} . </span>
						<span className="font-bold text-lg ml-1">
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

export default RestaurantCards;

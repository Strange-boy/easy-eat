import { CDN_URL } from "../../src/utils/constants";

//now we would use restaurant cards to call each of the restaurants
const RestaurantCards = (props) => {
	// console.log(props);
	const { resData } = props;

	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
		resData.info;

	return (
		<div
			className="restro-card"
			style={{
				backgroundColor: "#f0f0f0",
			}}
		>
			<img
				className="restro-image"
				src={CDN_URL + cloudinaryImageId}
				alt={name + "-image"}
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating}</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla.deliveryTime} mins</h4>
		</div>
	);
};

export default RestaurantCards;

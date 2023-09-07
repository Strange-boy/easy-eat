//here we are importing these two statements from the node modules
import React from "react";
import ReactDOM from "react-dom/client";

//here we need to create the components for the restaurant application
// The compoenent layout:
/*
1.Header
	i.Logo
	ii. Nav bar
		1.Home 
		2.About us
		3.Contact us
		4.Cart

2.Body
	i. Search bar
	ii.Restaurant container
		1. Star rating
		2. cuisine
		3. Price
		4. Image
		5. Type of delivery


3.Footer
	i.Address
	ii.Copyrights

*/

//we would also require a header component
const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo-image"
					src="https://www.seekpng.com/png/full/943-9437060_elegant-traditional-restaurant-logo-design-for-fork-graphic.png"
					alt="restaurant logo"
				/>
			</div>
			<div className="nav-container">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Contact us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

// const styleCard = {
// 	backgroundColor: "#f0f0f0",
// };

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
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
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

//in order to find the restaurant details live data
const restaurantList = [
	{
		info: {
			id: "136431",
			name: "Aramana",
			cloudinaryImageId: "hrpgrbciluqexfduqtuq",
			locality: "Thatampally",
			areaName: "Pazhaveedu",
			costForTwo: "₹300 for two",
			cuisines: [
				"Chinese",
				"North Indian",
				"South Indian",
				"Ice Cream",
				"Biryani",
			],
			avgRating: 3.7,
			feeDetails: {
				restaurantId: "136431",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "241185",
			avgRatingString: "3.7",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 32,
				lastMileTravel: 2.9,
				serviceability: "SERVICEABLE",
				slaString: "32 mins",
				lastMileTravelString: "2.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 22:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/aramana-thatampally-pazhaveedu-alappuzha-136431",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "476301",
			name: "Uduppi Saravana Bhavan",
			cloudinaryImageId: "orgxekvqm1qzo6hzq6zu",
			locality: "Thathampally",
			areaName: "Anantha Narayanapuram",
			costForTwo: "₹200 for two",
			cuisines: [
				"Pastas",
				"Chinese",
				"North Indian",
				"South Indian",
				"Biryani",
			],
			avgRating: 4.1,
			veg: true,
			feeDetails: {
				restaurantId: "476301",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "286256",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 17,
				lastMileTravel: 1.2,
				serviceability: "SERVICEABLE",
				slaString: "17 mins",
				lastMileTravelString: "1.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 22:15:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/uduppi-saravana-bhavan-thathampally-anantha-narayanapuram-alappuzha-476301",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "360255",
			name: "Cakelers",
			cloudinaryImageId: "sl3bcfesucogdojrdw8z",
			locality: "Sea View Ward",
			areaName: "Kanjiramchira",
			costForTwo: "₹150 for two",
			cuisines: ["Bakery"],
			avgRating: 4.5,
			feeDetails: {
				restaurantId: "360255",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "55221",
			avgRatingString: "4.5",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 20:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/cakelers-sea-view-ward-kanjiramchira-alappuzha-360255",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "133968",
			name: "Kream Korner",
			cloudinaryImageId: "qlngtdzmirqnx4uqrq4f",
			locality: "Thatampally",
			areaName: "Anantha Narayanapuram",
			costForTwo: "₹300 for two",
			cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "133968",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "120591",
			avgRatingString: "4.1",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 0.5,
				serviceability: "SERVICEABLE",
				slaString: "33 mins",
				lastMileTravelString: "0.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 21:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/kream-korner-thatampally-anantha-narayanapuram-alappuzha-133968",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "400543",
			name: "Veggie Square",
			cloudinaryImageId: "ajxvrjeootmyalytkm5z",
			locality: "Ambalapuzha Circle",
			areaName: "Anantha Narayanapuram",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian", "South Indian"],
			avgRating: 4.2,
			veg: true,
			feeDetails: {
				restaurantId: "400543",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "258808",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 16,
				lastMileTravel: 1,
				serviceability: "SERVICEABLE",
				slaString: "16 mins",
				lastMileTravelString: "1.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 21:10:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/veggie-square-ambalapuzha-circle-anantha-narayanapuram-alappuzha-400543",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "133295",
			name: "Achayans Cafe",
			cloudinaryImageId: "bgwb3nwu8ux4zvmal8nl",
			locality: "Thathampally",
			areaName: "Anantha Narayanapuram",
			costForTwo: "₹250 for two",
			cuisines: ["Pizzas", "Continental", "Ice Cream", "Beverages"],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: "133295",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "26854",
			avgRatingString: "4.3",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 0.9,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "0.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 20:50:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/achayans-cafe-thathampally-anantha-narayanapuram-alappuzha-133295",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "135797",
			name: "Halal Food Court",
			cloudinaryImageId: "zpcxbzixxvtc8ri4dj3q",
			locality: "Veliyanad Road",
			areaName: "Anantha Narayanapuram",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "South Indian", "Biryani"],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "135797",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "92807",
			avgRatingString: "4.2",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 1.2,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "1.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/halal-food-court-veliyanad-road-anantha-narayanapuram-alappuzha-135797",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "167895",
			name: "Madras Veg Tables",
			cloudinaryImageId: "lqbaeeendvoh5uslbfaz",
			locality: "Kalarkode",
			areaName: "Punnapra",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "North Indian", "South Indian"],
			avgRating: 4.2,
			veg: true,
			feeDetails: {
				restaurantId: "167895",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "128929",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 3.6,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "3.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 21:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/madras-veg-tables-kalarkode-punnapra-alappuzha-167895",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "159020",
			name: "Pastry Chef",
			cloudinaryImageId: "fbd5x3i0znbyhiuy1six",
			locality: "Chakkarakadavu Pally",
			areaName: "Thathampally",
			costForTwo: "₹600 for two",
			cuisines: ["Bakery"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "159020",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "5505",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 14,
				lastMileTravel: 0.3,
				serviceability: "SERVICEABLE",
				slaString: "14 mins",
				lastMileTravelString: "0.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 20:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/pastry-chef-chakkarakadavu-pally-thathampally-alappuzha-159020",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "485901",
			name: "Saffron Kuzhimandhi",
			cloudinaryImageId: "sefjxez6ipxqhluudmmj",
			locality: "Reliance Mall",
			areaName: "Pazhaveedu",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "Burgers", "Biryani"],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: "485901",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "230995",
			avgRatingString: "3.9",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 19,
				lastMileTravel: 3.6,
				serviceability: "SERVICEABLE",
				slaString: "19 mins",
				lastMileTravelString: "3.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 22:45:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/saffron-kuzhimandhi-reliance-mall-pazhaveedu-alappuzha-485901",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "135795",
			name: "Chillies Restaurant",
			cloudinaryImageId: "ulmthqw0adyv8g4axyq7",
			locality: "Anantha Narayanapuram",
			areaName: "Vadackal",
			costForTwo: "₹200 for two",
			cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
			avgRating: 4,
			feeDetails: {
				restaurantId: "135795",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "9656",
			avgRatingString: "4.0",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 2.6,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "2.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 22:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/chillies-restaurant-anantha-narayanapuram-vadackal-alappuzha-135795",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "404380",
			name: "Food Stop",
			cloudinaryImageId: "g95m1b2wnrghr0qbg5f4",
			locality: "Amabalapuzha Circle",
			areaName: "Vadackal",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian", "Chinese", "South Indian", "Beverages"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "404380",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "3969",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 3.7,
				serviceability: "SERVICEABLE",
				slaString: "30 mins",
				lastMileTravelString: "3.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 21:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/food-stop-amabalapuzha-circle-vadackal-alappuzha-404380",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "524261",
			name: "Chicking",
			cloudinaryImageId: "86f52324ecee5fc94cbf63c4a568b672",
			locality: "Reliance Mall",
			areaName: "Vadackal",
			costForTwo: "₹399 for two",
			cuisines: ["Fast Food", "Continental"],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: "524261",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "251",
			avgRatingString: "3.9",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 31,
				lastMileTravel: 3.6,
				serviceability: "SERVICEABLE",
				slaString: "31 mins",
				lastMileTravelString: "3.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "40% OFF",
				subHeader: "UPTO ₹80",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/chicking-reliance-mall-vadackal-alappuzha-524261",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "137232",
			name: "KFC",
			cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
			locality: "Shymas Arcade",
			areaName: "Vadackal",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "137232",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2600,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2600,
			},
			parentId: "547",
			avgRatingString: "4.1",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-07 22:57:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/kfc-shymas-arcade-vadackal-alappuzha-137232",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "448734",
			name: "Domino's Pizza",
			cloudinaryImageId: "qjmfrbnovo440jm7engn",
			locality: "Mullackal Village",
			areaName: "Thathampally",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "448734",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1800,
			},
			parentId: "2456",
			avgRatingString: "4.4",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 25,
				serviceability: "SERVICEABLE",
				slaString: "25 mins",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-09-08 02:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹100 OFF",
				subHeader: "ABOVE ₹999",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/dominos-pizza-mullackal-village-thathampally-alappuzha-448734",
			type: "WEBLINK",
		},
	},
];

//now we would try to create a body component
const Body = () => {
	return (
		<div className="body">
			<div className="search-bar">Search bar</div>
			<div className="restro-container">
				{/* we would use a container for individual restaurant cards */}
				{restaurantList.map((restaurant) => (
					<RestaurantCards key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

//we would require a application layout
const AppLayout = () => {
	return (
		<div className="app">
			{/* component composition */}
			<Header />
			<Body />
		</div>
	);
};

const rootFile = ReactDOM.createRoot(document.getElementById("rootFile"));

rootFile.render(<AppLayout />);

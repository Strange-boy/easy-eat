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
	console.log(props);
	return (
		<div
			className="restro-card"
			style={{
				backgroundColor: "#f0f0f0",
			}}
		>
			<img
				className="restro-image"
				src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hrpgrbciluqexfduqtuq"
				alt="paramount-image"
			/>
			<h3>{props.resName}</h3>
			<h4>{props.resCuisine}</h4>
			<h4>4.1</h4>
			<h4>25 mins</h4>
		</div>
	);
};

//now we would try to create a body component
const Body = () => {
	return (
		<div className="body">
			<div className="search-bar">Search bar</div>
			<div className="restro-container">
				{/* we would use a container for individual restaurant cards */}
				<RestaurantCards
					resName="Paramount Hotel"
					resCuisine="Biryani, North Indian"
				/>
				<RestaurantCards
					resName="Oru Dosa company"
					resCuisine="Dosa, South Indian"
				/>
				<RestaurantCards
					resName="Thaff delicacy"
					resCuisine="North Indian, South Indian, Non veg"
				/>
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

//here we are importing these two statements from the node modules
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/cart-components/Cart";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

//it acts as a bridge betweeen react and redux
import { Provider } from "react-redux";
import appStore from "./utils/redux-files/appStore";
import Footer from "./components/Footer";

// import Grocery from "./components/Grocery";

//chunky loading
const Grocery = lazy(() => import("./components/Grocery"));

//lets try using lazy loading for about us page
const About = lazy(() => import("./components/About"));

//here we need to create the components for the restaurant application

//we would require a application layout
const AppLayout = () => {
	const [username, setUsername] = useState();

	useEffect(() => {
		const data = {
			username: "Joel",
		};
		setUsername(data.username);
	});

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: username, setUsername }}>
				<div className="app">
					<Header />
					<Outlet />
					<Footer />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <ErrorPage />,
	},
]);

const rootFile = ReactDOM.createRoot(document.getElementById("rootFile"));

rootFile.render(<RouterProvider router={appRouter} />);

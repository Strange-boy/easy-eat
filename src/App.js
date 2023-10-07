//here we are importing these two statements from the node modules
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//here we need to create the components for the restaurant application

//we would require a application layout
const AppLayout = () => {
	return (
		<div className="app">
			{/* component composition */}
			<Header />
			<Outlet />
		</div>
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
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
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

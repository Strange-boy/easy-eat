import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/redux-files/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("test cases related to header components", () => {
	it("should render the header component", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
	});

	it("should render the cart item in the header component", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		//query
		const item = screen.getByText(/Cart/);

		//assertion
		expect(item).toBeInTheDocument();
	});
});

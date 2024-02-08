import { render, screen } from "@testing-library/react";
import ClearCartAlert from "../cart-components/ClearCartAlert";
import { Provider } from "react-redux";
import appStore from "../../utils/redux-files/appStore";
import "@testing-library/jest-dom";

describe("Cart related unit test case", () => {
	it("should load the clear cart button in cart component", () => {
		render(
			<Provider store={appStore}>
				<ClearCartAlert />
			</Provider>
		);

		//query to find the button
		const button = screen.getByRole("button", { name: "Clear Cart" });

		//assertion
		expect(button).toBeInTheDocument();
	});
});

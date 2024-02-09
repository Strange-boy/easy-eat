import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import restaurantMenuMock from "../mocks/restaurantMenuMock.json";
import { act } from "react-dom/test-utils";

//we need to import react-redux package
import { Provider } from "react-redux";
import appStore from "../../utils/redux-files/appStore";
import { BrowserRouter } from "react-router-dom";

//now we need to imitate the fetch function
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(restaurantMenuMock),
	})
);

describe("In order to test the complete flow adding items to cart", () => {
	beforeEach(async () => {
		//first we need to component
		await act(async () =>
			render(
				<Provider store={appStore}>
					<BrowserRouter>
						<Header />
						<RestaurantMenu />
					</BrowserRouter>
				</Provider>
			)
		);
	});

	//in order to check that the items are added to the cart
	it("should check whether the acccordion works properly", () => {
		const accordionHeader = screen.getByText("Fried Rice (13)");

		fireEvent.click(accordionHeader);

		//in order to check the food items are present accordingly
		const foodItems = screen.getAllByTestId("itemList");
		expect(foodItems.length).toBe(13);
	});

	it("should check whether the cart items updated when the user adds item", () => {
		const accordionHeader = screen.getByText("Fried Rice (13)");
		fireEvent.click(accordionHeader);

		//now we need to fire an event to find the items are added into the cart
		const addButtons = screen.getAllByRole("button", { name: "ADD" });
		const cartItems = screen.getByTestId("cartItemsCount");

		//initially the cart must be empty
		expect(cartItems.textContent).toBe("0");

		//fire the first button and check whether the number changes to 1
		fireEvent.click(addButtons[0]);

		//there should be an items after adding an items into the cart
		expect(cartItems.textContent).toBe("1");

		//now there are 2 items added to the cart
		fireEvent.click(addButtons[1]);
		expect(cartItems.textContent).toBe("2");
	});
});

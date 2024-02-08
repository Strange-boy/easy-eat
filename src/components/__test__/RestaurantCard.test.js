
import { render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import MOCK_DATA from "../mocks/RestaurantCardData.json"
import "@testing-library/jest-dom"

it("should render the restaurant card data along with restaurant data", () => {

    //first we must render the component
    render(<RestaurantCards resData={MOCK_DATA}/>)

    //now we have must query heading 
    const restaurantName = screen.getByText("Thai's Kitchen");

    //now we have to state the assertion
    expect(restaurantName).toBeInTheDocument(); 
})
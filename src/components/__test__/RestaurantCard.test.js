
import { render, screen, waitFor } from "@testing-library/react";
import RestaurantCards, {withBestSellingRestro} from "../RestaurantCards";

import MOCK_DATA from "../mocks/RestaurantCardData.json"
import "@testing-library/jest-dom"


describe("In order to test the restaurant card component", () => {
    it("should render the restaurant card data along with restaurant data", () => {

        //first we must render the component
        render(<RestaurantCards resData={MOCK_DATA}/>)
    
        //now we have must query heading 
        const restaurantName = screen.getByText("Arabian Shake Cafe -Indira Jn");
    
        //now we have to state the assertion
        expect(restaurantName).toBeInTheDocument(); 
    })


    //in order to render the best selling restaurant
    const BestSellerRestro = withBestSellingRestro(RestaurantCards);
    it("should render the higher order component", async () => {
        //render the component
        render(<BestSellerRestro resData={MOCK_DATA} />)

        
        const bestSellingLabel = screen.getByText("Best Seller");
        expect(bestSellingLabel).toBeInTheDocument();
    })
})


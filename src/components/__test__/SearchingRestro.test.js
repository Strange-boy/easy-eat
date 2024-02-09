//try to perform integration testing => searching of restaurants

import { fireEvent, render, screen,waitFor } from "@testing-library/react"
import Body from "../Body"
import restaurantListMock from "../mocks/restaurantListMock.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

//in order to imitate the fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(restaurantListMock);
        }
    })
})

describe("In order to make sure the search function works as properly", () => {
    it("should render the body component", async () => {

        await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        ))
    
        //in order to find the search box in the document
        const searchFeild = screen.getByRole("searchbox");
        expect(searchFeild).toBeInTheDocument();
    })

    //in order to make sure that the search component works as intended
    it("should display the required result according to the user query", async () => {
        //render the component
        await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        ))
        
        //in order to query 
        const searchField = screen.getByTestId("searchInput");
        // console.log(searchField);

        const beforeSearchingCards = screen.getAllByTestId("restroCards");
        const beforeCardsLength = beforeSearchingCards.length;

        //first assertion
        expect(beforeCardsLength).toBe(9);

        fireEvent.change(searchField, {target: {value: "Aramana"}});

        // Wait for debounce time
        await waitFor(() => new Promise(resolve => setTimeout(resolve, 300)))

        const afterSearchingCards = screen.getAllByTestId("restroCards");
        const afterCardsLength = afterSearchingCards.length;
        const title = screen.getByText("Aramana");

        //second assertion
        expect(afterCardsLength).toBe(1);
        expect(title).toBeInTheDocument();
    })
})


//try to perform integration testing => searching of restaurants

import { render, screen } from "@testing-library/react"
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

descibe("In order to make sure the search function works as properly", () => {
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
})


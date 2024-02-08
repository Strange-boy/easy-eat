import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page related test cases:", () => {
	it("Check if the Contact component is loaded or not", () => {
		//first we need to render the component into the js dom
		render(<Contact />);

		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	it("check if the button is present", () => {
		render(<Contact />);

		const button = screen.getByText("Submit");
		expect(button).toBeInTheDocument();
	});
});

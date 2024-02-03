import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

test("Check if the Contact component is loaded or not", () => {
	//first we need to render the component into the js dom
	render(<Contact />);

	const heading = screen.getByRole("heading");
	expect(heading).toBeInTheDocument();
});

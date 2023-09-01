//here we are importing these two statements from the node modules
import React from "react";
import ReactDOM from "react-dom/client";

//writing the code from scratch
// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Welcome to Namaste React!! "
// );

// console.log(heading);

// console.log(jsxHeading);

//in order to write a heading component
// const HeadingComponent = () => {
// 	return <h1 className="component">This is a heading component</h1>;
// };

const element = <span>I am a Span </span>;

//in order to write the code using jsx
const title = (
	<h1 id="heading" className="head">
		{element}
		Welcome to Namaste React from JSX!!
	</h1>
);

const HeadingComponent = () => (
	<div className="container">
		{title}
		{/* <h2>{value}</h2> */}
		<h1 className="component">This is a Heading component</h1>
	</div>
);

const rootFile = ReactDOM.createRoot(document.getElementById("rootFile"));

rootFile.render(<HeadingComponent />);

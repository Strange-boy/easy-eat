import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errorPage from "../assets/errorPage.jpg";

const ErrorPage = () => {
	const err = useRouteError();
	console.log(err);

	return (
		<div>
			<div className="flex justify-center mt-20">
				<img src={errorPage} alt="error-page" className="w-1/3" />
			</div>
			<h2 className="flex justify-center mt-4 text-xl font-semibold">
				<div className="flex-col">
					<p className="text-center">That page seems to have gone stale.</p>
					<p>How about a fresh start from our homepage?</p>
				</div>
			</h2>
			<div className="flex justify-center mt-4">
				<button className="bg-red-400 text-slate-100 px-4 py-2 text-lg font-semibold rounded-full shadow-red-400/50 shadow-lg">
					{" "}
					<Link>Home</Link>{" "}
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;

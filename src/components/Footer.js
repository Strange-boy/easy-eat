import { Fragment } from "react";
import GithubIcon from "../svg/GithubIcon";
import { GITHUB_LINK } from "../utils/constants";

const Footer = () => {
	return (
		<>
			<div className="mt-4 flex justify-center items-center bg-gray-900 text-slate-50">
				<p className=" font-semibold py-4">Made with ❤️ by Joel</p>
				<span className="inline-block pl-5">
					<a href={GITHUB_LINK} target="__blank">
						{" "}
						<GithubIcon />{" "}
					</a>
				</span>
			</div>
			<div className="bg-gray-900 flex justify-center">
				<p className=" text-slate-50">
					<a href="https://www.freepik.com/free-vector/man-shopping-supermarket_9650074.htm#query=empty%20cart%20illustration&position=1&from_view=keyword&track=ais&uuid=fac7753d-fcac-4cec-8b05-0e0c63db0b53">
						Image by pch.vector
					</a>{" "}
					on Freepik
				</p>
			</div>
		</>
	);
};

export default Footer;

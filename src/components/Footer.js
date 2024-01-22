import GithubIcon from "../svg/GithubIcon";
import { GITHUB_LINK } from "../utils/constants";

const Footer = () => {
	return (
		<div className="mt-4 flex justify-center items-center bg-gray-900 text-slate-50">
			<p className=" font-semibold py-4">Made with ❤️ by Joel</p>
			<span className="inline-block pl-5">
				<a href={GITHUB_LINK} target="__blank">
					{" "}
					<GithubIcon />{" "}
				</a>
			</span>
		</div>
	);
};

export default Footer;

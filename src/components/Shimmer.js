import ShimmerCards from "./ShimmerCards";

const Shimmer = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mx-auto w-4/5">
			<div className="my-2 mx-1 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-1 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>

			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			{/* 3rd set */}
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
			<div className="my-2 mx-2 w-full">
				<ShimmerCards />
			</div>
		</div>
	);
};

export default Shimmer;

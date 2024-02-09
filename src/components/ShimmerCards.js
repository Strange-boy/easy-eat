const ShimmerCards = () => {
	return (
		<div className="border border-slate-200 shadow rounded-md py-6 px-8 max-w-lg w-full mx-auto">
			<div className="animate-pulse flex-col items-center space-x-8">
				<div className="rounded-md bg-slate-300 h-48 w-11/12 mx-auto mb-4"></div>
				<div className="flex-1 space-y-6 py-1">
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-2">
							<div className="h-4 bg-slate-300 rounded col-span-2"></div>
						</div>
						<div className="grid grid-cols-3 gap-2">
							<div className="h-4 bg-slate-300 rounded col-span-1"></div>
							<div className="h-4 bg-slate-300 rounded col-span-1"></div>
						</div>
						<div className="h-4 bg-slate-300 rounded"></div>
						<div className="grid grid-cols-3 gap-2">
							<div className="h-4 bg-slate-300 rounded col-span-2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShimmerCards;

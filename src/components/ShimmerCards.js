const ShimmerCards = () => {
	return (
		<div class="border border-slate-200 shadow rounded-md py-6 px-8 max-w-lg w-full mx-auto">
			<div class="animate-pulse flex-col items-center space-x-8">
				<div class="rounded-md bg-slate-300 h-48 w-11/12 mx-auto mb-4"></div>
				<div class="flex-1 space-y-6 py-1">
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-2">
							<div class="h-4 bg-slate-300 rounded col-span-2"></div>
						</div>
						<div class="grid grid-cols-3 gap-2">
							<div class="h-4 bg-slate-300 rounded col-span-1"></div>
							<div class="h-4 bg-slate-300 rounded col-span-1"></div>
						</div>
						<div class="h-4 bg-slate-300 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShimmerCards;

const ShimmerCards = () => {
	return (
		<div class="border border-slate-400 shadow rounded-md py-6 px-8 max-w-lg w-full mx-auto">
			<div class="animate-pulse flex space-x-8">
				<div class="rounded-full bg-slate-400 h-12 w-12"></div>
				<div class="flex-1 space-y-6 py-1">
					<div class="h-4 bg-slate-400 rounded"></div>
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-4">
							<div class="h-4 bg-slate-400 rounded col-span-2"></div>
							<div class="h-4 bg-slate-400 rounded col-span-1"></div>
						</div>
						<div class="h-4 bg-slate-400 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShimmerCards;

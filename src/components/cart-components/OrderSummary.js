const OrderSummary = () => {
	return (
		<div className="w-2/5 m-4 border-2 rounded-lg h-[26rem] sticky top-8">
			<div className="p-2 m-2 pb-4 border-solid border-b-2 border-gray-400">
				<p className="text-xl font-bold">Order summary</p>
			</div>
			<div className="px-2 py-2 mx-2 border-dotted border-b-[1px] border-gray-400">
				<p className="font-semibold text-lg pb-2">Bill details</p>
				<div className="flex justify-between">
					<div className="leading-6 text-slate-700">
						<p>Item total</p>
						<p>Delivery partner fee</p>
					</div>
					<div className="leading-6 flex-col justify-end">
						<p>₹ 210</p>
						<p>₹ 10</p>
					</div>
				</div>
			</div>
			<div className="px-2 pt-2 pb-4 mx-2 border-b-4 border-slate-700">
				<div className="flex justify-between">
					<div className="leading-6 text-slate-700">
						<p>Platform fees</p>
						<p>GST Charges</p>
					</div>
					<div className="leading-6 flex-col justify-end">
						<p>₹ 3</p>
						<p>₹ 5.5</p>
					</div>
				</div>
			</div>
			<div className="px-2 pt-2 pb-4 mx-2 border-b-4 border-slate-700">
				<div className="flex justify-between text-lg font-bold">
					<p>Total</p>
					<p>₹ 210</p>
				</div>
			</div>
			<div className="mt-6 flex justify-center">
				<button className="p-4 mx-auto text-xl bg-slate-800 text-slate-100 font-bold rounded-2xl hover:bg-slate-700">
					Proceed to Payment
				</button>
			</div>
		</div>
	);
};

export default OrderSummary;

const MenuClassifier = ({ dishClass }) => {
	if (dishClass?.vegClassifier === undefined) return <div></div>;

	const { vegClassifier } = dishClass;
	// console.log(vegClassifier);

	return (
		<div>
			{vegClassifier === "VEG" ? (
				<img
					className="w-6"
					src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
					alt="vegetarian-food-symbol"
				/>
			) : (
				<img
					className="w-6"
					src="https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png"
					alt="non-vegetarian-food-symbol"
				/>
			)}
		</div>
	);
};

export default MenuClassifier;

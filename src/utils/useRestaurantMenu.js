import { SWIGGY_RESTRO_MENU_P1, SWIGGY_RESTRO_MENU_P2 } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
	const [restroInfo, setRestroInfo] = useState(null);

	useEffect(() => {
		fetchRestroMenu();
	}, []);

	const fetchRestroMenu = async () => {
		const response = await fetch(
			SWIGGY_RESTRO_MENU_P1 + resId + SWIGGY_RESTRO_MENU_P2
		);

		const data = await response.json();
		setRestroInfo(data);
	};

	return restroInfo;
};

export default useRestaurantMenu;

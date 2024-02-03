import { useEffect, useState } from "react";

const useDebounce = (query, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(query);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedValue(query);
		}, delay);

		return () => clearTimeout(timerId);
	}, [query, delay]);

	return debouncedValue;
};

export default useDebounce;

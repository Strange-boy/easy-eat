import { useEffect, useState } from "react";

//contract: return the online status
const useOnlineStatus = () => {
	//by default let's assume there is not internet connectivity
	const [onlineStatus, setOnlineStatus] = useState(true);

	useEffect(() => {
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});

		window.addEventListener("online", () => {
			setOnlineStatus(true);
		});
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;

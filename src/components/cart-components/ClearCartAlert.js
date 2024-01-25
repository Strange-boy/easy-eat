import React from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";

//in order to import the components
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

//in order import react - redux program
import { useDispatch, useSelector } from "react-redux";
import { clearAmount, clearCart } from "../../utils/redux-files/cartSlice";

const ClearCartAlert = () => {
	//in order to create a cart item
	const cartItems = useSelector((store) => store.cart.item);

	//in order dispatch an item
	const dispatch = useDispatch();

	//in order to use the toast
	const { toast } = useToast();

	//in order to clear the cart items
	const handleClearCart = () => {
		dispatch(clearAmount()); //in order to clear all the tabs
		dispatch(clearCart(cartItems)); //in order to remove all the items

		toast({
			title: `Cart Emptied 🛒`,
			description: "Your cart is ready to be filled again. 🏁",
		});
	};

	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button className="font-bold text-base">Clear Cart</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle className="text-xl">
							Are you absolutely sure?
						</AlertDialogTitle>
						<AlertDialogDescription className="text-base">
							Giving up on food already? Don't worry, we'll be here when you're
							hungry again. 🍽️
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className="text-base font-semibold">
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							className="text-base font-semibold"
							onClick={handleClearCart}
						>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default ClearCartAlert;

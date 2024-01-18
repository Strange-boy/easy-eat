//this keeps from the redux toolkit => as it is it's job to provide the store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//we will add the slices to it later
const appStore = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default appStore;

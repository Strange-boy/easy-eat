import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		item: [],
		totalCost: 0,
	},
	reducers: {
		//actions related adding the cart item
		addItem: (state, action) => {
			state.item.push(action.payload);
		},
		removeItem: (state, action) => {
			const filteredItems = state.item.filter(
				(cartItem) => cartItem?.card?.info?.id !== action.payload
			);

			state.item = filteredItems;
		},
		clearCart: (state) => {
			state.item.length = 0;
		},
		//actions related to calculating the amount
		increaseAmount: (state, action) => {
			state.totalCost += action.payload;
		},
		decreaseAmount: (state, action) => {
			state.totalCost -= action.payload;
		},
		clearAmount: (state) => {
			state.totalCost = 0;
		},
	},
});

export const {
	addItem,
	removeItem,
	clearCart,
	increaseAmount,
	decreaseAmount,
	clearAmount,
} = cartSlice.actions;

export default cartSlice.reducer;

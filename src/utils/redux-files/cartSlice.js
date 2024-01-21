import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		item: [],
		totalCost: 0,
	},
	reducers: {
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
		calculateTotalAmount: (state, action) => {
			state.totalCost += action.payload;
		},
	},
});

export const { addItem, removeItem, clearCart, calculateTotalAmount } =
	cartSlice.actions;

export default cartSlice.reducer;

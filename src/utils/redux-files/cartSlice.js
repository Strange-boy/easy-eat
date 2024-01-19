import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		item: [],
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
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

//this keeps from the redux toolkit => as it is it's job to provide the store
import { configureStore } from "@reduxjs/toolkit";

//we will add the slices to it later
const appStore = configureStore({});

export default appStore;

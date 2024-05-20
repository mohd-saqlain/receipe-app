import { configureStore } from "@reduxjs/toolkit";
import receipeSlice from "./slice/recepie";
import selectedRecipeSlice from "./slice/selectedRecepie";

const store = configureStore({
    reducer:{
        receipes:receipeSlice.reducer,
        selectedRecepie:selectedRecipeSlice.reducer,
    }
});

export default store;
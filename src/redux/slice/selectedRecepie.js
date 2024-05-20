import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectedRecipeSlice = createSlice({
    name:'selectedRecepie',
    initialState,
    reducers:{
        updateSelectedRecepie(state,action){
            return action.payload
        }
    }
})

export const {updateSelectedRecepie} = selectedRecipeSlice.actions;
export default selectedRecipeSlice 
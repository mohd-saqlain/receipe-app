import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:null,
    isLoading:true,
    message:null,
}

export const fetchRecepies = createAsyncThunk(
    'fetchRecepies',
    async () => {
           const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')
           if(!response.ok){
            throw new Error('Network error');
           }
           const data = await response.json()
           return data;
        }
)

const receipeSlice = createSlice({
    name:'recepies',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRecepies.fulfilled,(state,action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.message = null;
        })
        builder.addCase(fetchRecepies.rejected,(state,action) => {
            state.message = "Network response error";
            state.isLoading = true; 
        })
        builder.addCase(fetchRecepies.pending,(state,action) => {
            state.isLoading = true;
            state.message = "Please wait...";
        })
    },
})


export default receipeSlice; 

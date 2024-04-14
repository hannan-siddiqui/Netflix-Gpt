import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showSearchView:false,
    },

    reducers: {
        toggleSearchView: (state) =>{
            state.showSearchView= !state.showSearchView;
        }
    }
});

export const {toggleSearchView} = gptSlice.actions;
export default gptSlice.reducer;


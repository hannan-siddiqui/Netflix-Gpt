import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showSearchView:false,
        gptMovies:null,
        gptMovieName:null,
    },

    reducers: {
        toggleSearchView: (state) =>{
            state.showSearchView= !state.showSearchView;
        },
        addGptMovies: (state, action) => {
            const{movieName, movieResults}= action.payload;
            state.gptMovies = movieResults;
            state.gptMovieName  = movieName;
        }
    }
});

export const {toggleSearchView, addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;


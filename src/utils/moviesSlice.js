import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideos : null,
       
    },
    reducers:{
        addNowPalyingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addtTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        },
        
    },
});

export const {addNowPalyingMovie, addtTrailerVideos} = moviesSlice.actions;
export default moviesSlice.reducer;
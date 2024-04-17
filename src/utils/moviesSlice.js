import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies : null,
        popularMovies : null,
        upcomingMovies : null,
        topRatedMovies : null,
        trailerVideos : null,
        trailer:null,
       
    },
    reducers:{
        addNowPalyingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addtTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        },
        addTrailer:(state, action)=>{
            state.trailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addupcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        
    },
});

export const {addNowPalyingMovie, addtTrailerVideos, addTrailer, addPopularMovies, addupcomingMovies, addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
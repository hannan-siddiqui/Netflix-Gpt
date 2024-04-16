import { API_OPTIONS } from "../utils/constant";
import { addNowPalyingMovie } from "../utils/moviesSlice";
import { useDispatch, useSelector, } from "react-redux";
import { useEffect } from "react";

const useNowPalyingMovies = () => {


    const movies = useSelector(store=>store.movies.nowPlayingMovies);

    const dispatch = useDispatch()

    const nowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
        const json = await response.json();
        

        // updating redux store

        dispatch(addNowPalyingMovie(json.results));
      }
    
    useEffect(()=>{
// memoization 

     !movies && nowPlayingMovies();

    }, [])


}

export default useNowPalyingMovies
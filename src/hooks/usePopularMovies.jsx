import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {

    const movies = useSelector(store=>store.movies.popularMovies);
    const dispatch = useDispatch()

    const getPupularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
         API_OPTIONS);
        
         const json = await response.json();
     
        

        // updating redux store

        dispatch(addPopularMovies(json.results));
      }
    
    useEffect(()=>{
        !movies && getPupularMovies();
    }, [])
  
}

export default usePopularMovies
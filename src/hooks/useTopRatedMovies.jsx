import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const movies = useSelector(store=>store.movies.topRatedMovies);

    const dispatch = useDispatch()

    const getTop = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
         API_OPTIONS);
        
         const json = await response.json();
    
        

        // updating redux store

        dispatch(addTopRatedMovies(json.results));
      }
    
    useEffect(()=>{
       !movies &&  getTop();
    }, [])
  
}

export default useTopRatedMovies;
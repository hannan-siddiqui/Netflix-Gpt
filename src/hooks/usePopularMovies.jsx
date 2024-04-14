import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {


    const dispatch = useDispatch()

    const getPupularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
         API_OPTIONS);
        
         const json = await response.json();
        console.log(json.results);
        

        // updating redux store

        dispatch(addPopularMovies(json.results));
      }
    
    useEffect(()=>{
        getPupularMovies();
    }, [])
  
}

export default usePopularMovies
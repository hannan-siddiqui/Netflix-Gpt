import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addupcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {


    const dispatch = useDispatch()

    const getuseUpcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
         API_OPTIONS);
        
         const json = await response.json();
         console.log(json.results);
        

        // updating redux store

        dispatch(addupcomingMovies(json.results));
      }
    
    useEffect(()=>{
        getuseUpcomingMovies();
    }, [])
  
}

export default useUpcomingMovies;
import Header from "./Header";
import useNowPalyingMovies from "../hooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingmovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";



 const Browse = () => {

  const showgpt = useSelector(store=>store.gpt.showSearchView);

  useNowPalyingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
    

   return (

      <div>

        <Header/>
        {showgpt? 
         <GptSearch/>:
        <>
         <MainContainer/>
         <SecondaryContainer/>
        </>  
        
      }

       
       
        
      </div>
   
   )
 }
 
 export default Browse;
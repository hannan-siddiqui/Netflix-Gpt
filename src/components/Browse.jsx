import Header from "./Header";
import useNowPalyingMovies from "../hooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingmovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";



 const Browse = () => {


  useNowPalyingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
    

   return (

      <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        
      </div>
   
   )
 }
 
 export default Browse;
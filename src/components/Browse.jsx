import Header from "./Header";
import useNowPalyingMovies from "../hooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


 const Browse = () => {


  useNowPalyingMovies();
    

   return (

      <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        
      </div>
   
   )
 }
 
 export default Browse;
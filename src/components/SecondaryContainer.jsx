import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies);
  

  return (

    <div className="bg-black "> 
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-10 ">
      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular Movies "} movies={movies.popularMovies} />
      
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer
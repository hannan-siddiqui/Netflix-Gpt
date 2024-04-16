import MovieCard from "./MovieCard";


const MovieList = ({title, movies}) => {
    
    
    
    if(!movies) return;

  return (
    <div className="py-2">
        <h1 className="font-bold text-3xl text-white ">{title}</h1>
        <div className=" pt-4 flex overflow-x-scroll ">
        
            <div className="flex">
                {
                    movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                }
            </div>

        </div>
    </div>
  )
}

export default MovieList;
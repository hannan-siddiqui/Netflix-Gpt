import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { addtTrailerVideos } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch();

    const getMovieVideos = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
       
        const json = await data.json();
  

        const trailers = json?.results.filter((video)=>video.type === 'Trailer');

        const trailer = trailers.length? trailers[0] : json?.results[0] ;

       

        
        dispatch(addtTrailerVideos(trailer));
       
    }


    useEffect(()=>{
        getMovieVideos()
    }, [] );

}

export default useMovieTrailer;

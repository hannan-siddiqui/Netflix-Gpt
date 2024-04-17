import { useEffect, useState } from "react";


import { API_OPTIONS } from "../utils/constant";



const useTrailer = (movieId) => {


    const [tr, settr] = useState(null);

    useEffect(()=>{
        
        MovieVideos();

    }, [] ); 

    
   

    const MovieVideos = async ()=> {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTIONS);

       
        const json = await data.json();
        

        // console.log(json.results);
     
  

        const trailers = json?.results.filter((video)=>video.type === 'Trailer');

        const trailer = trailers.length? trailers[0] : json?.results[0] ;
        settr(trailer);
       
    }

    return tr;

}

export default useTrailer;
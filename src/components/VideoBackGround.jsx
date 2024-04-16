import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";



const VideoBackGround = ({movieId}) => {

    const trailerVid = useSelector((store)=>store.movies?.trailerVideos);


    // fetch trailer vidoes and updating redux store
    useMovieTrailer(movieId); 
    

  return (
    <div className="w-screen pt-[30%] md:pt-0">
     
        <iframe
         className="aspect-video w-screen md:h-screen  p-2"
         width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVid?.key 
        + "?autoplay=1&mute=1"
        } 
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin"></iframe>

    </div>
  )
}

export default VideoBackGround
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import useTrailer from "../hooks/useTrailer";


const Trailer = () => {
    
    
    const {id }= useParams();
    


    
    console.log(id);

    const t = useTrailer(id);

    console.log(t);

    if(!t) return
   
    



  return (
    <div>
        <iframe
         className="aspect-video w-screen md:h-screen  p-2"
         width="560" height="315" src={"https://www.youtube.com/embed/"+ t.key
        + "?autoplay=1&mute=1"
        } 
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default Trailer
import { FaPlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {

  return (
    <div className="pt-[20%] w-screen aspect-video md:h-screen absolute ">
        <h1 className="text-4xl underline md:text-5xl text-white font-extrabold ml-10 ">{title}</h1>
        <p className="hidden md:inline-block font-bold text-white text-lg w-1/4 pt-20 ml-10">{overview}</p>
        <div className="pt-4 flex  md:float-none justify-start md:items-center ">
            <button className=" hover:bg-opacity-50  p-2 text-2xl md:my-4 md:ml-10 bg-white w-40  font-bold text-black flex items-center justify-center gap-2 rounded-sm  mt-[35%] ml-6
            "> <FaPlay/> Play</button>

            <button className="invisible md:visible bg-opacity-50 hover:bg-opacity-100 p-2 text-2xl my-4 ml-10 bg-white w-40  font-bold text-black flex items-center justify-center gap-2 rounded-sm"> <FaInfoCircle/> More Info </button>

        </div>
    </div>

  ) 

}

export default VideoTitle;
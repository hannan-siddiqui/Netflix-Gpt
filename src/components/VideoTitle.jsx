import { FaPlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {

  return (
    <div className="pt-[20%] w-screen h-screen absolute bg-gradient-to-r from-black">
        <h1 className="text-5xl text-white font-extrabold ml-10 ">{title}</h1>
        <p className="font-bold text-white text-lg w-1/4 pt-20 ml-10">{overview}</p>
        <div className="flex pt-4">
            <button className=" hover:bg-opacity-50  p-2 text-2xl my-4 ml-10 bg-white w-40  font-bold text-black flex items-center justify-center gap-2 rounded-sm"> <FaPlay/> Play</button>

            <button className="bg-opacity-50 hover:bg-opacity-100 p-2 text-2xl my-4 ml-10 bg-white w-40  font-bold text-black flex items-center justify-center gap-2 rounded-sm"> <FaInfoCircle/> More Info </button>

        </div>
    </div>

  ) 

}

export default VideoTitle;
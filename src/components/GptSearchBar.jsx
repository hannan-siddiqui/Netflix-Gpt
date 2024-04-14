import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
    
    const langkey = useSelector(store=>store.config.lang);
   

  return (
    <div className="pt-[10%] flex  justify-center">
        <form  className=" w-1/2 p-2 bg-black grid grid-cols-12">

            <input
            className=" col-span-8 mr-3  px-2  h-15 placeholder-red-500 font-bold text-red-500 placeholder:font-bold "
            type="text" placeholder= {lang[langkey].gptSearchPlaceHolder} />

            <button className=" col-span-4 bg-red-600 p-2 rounded-lg "> {lang[langkey].search} </button>
            
        </form>
    </div>
  )
}

export default GptSearchBar
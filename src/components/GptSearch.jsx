import { bg_Imgage} from "../utils/constant"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    
      <>

        <div className="absolute -z-10 ">
          <img
          className="h-screen object-cover"
          src={bg_Imgage} alt="" />
        </div>

        <div className="pt-[20%]" >
          <GptSearchBar/>
          <GptMovieSuggestion/>
      </div>

    </>
  )
}

export default GptSearch
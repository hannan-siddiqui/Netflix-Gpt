import { bg_Imgage, logo_URL } from "../utils/constant"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>

        <div className="absolute -z-10">
        <img src={bg_Imgage} alt="" />
        </div>

        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";

const GptMovieSuggestion = () => {

  const gpt = useSelector(store=>store.gpt);
  const {gptMovies , gptMovieName} = gpt;

  if(!gptMovieName) return null

  console.log(gptMovies);
  console.log(gptMovieName);


  const {original_title, overview, popularity, poster_path, release_date, vote_average } = gptMovies[0];
  console.log(original_title);



  return (
    <div className="m-4 p-8 bg-black bg-opacity-80 rounded-xl">
        
        <div className="border-[3px] border-red-600  pt-4 flex ">
        
            <div className="flex ">
              <div className="w-1/2">
                <div className="flex justify-evenly items-center">
                  <div className="w-[80%] h-20">
                  <h1 
                    className=" border-[3px] border-red-600  font-bold text-3xl ml-10 text-red-600 bg-orange-200 rounded-xl text-center  p-3 ">
                    {original_title} </h1>
                  </div>
                  <div className="ml-6 rounded-full font-bold bg-orange-200 text-red-500  h-30 w-20 p-4 flex items-center justify-center">
                    
                    <h1 className="text-lg flex items-center justify-center ">rating {vote_average}/10</h1>
                  </div>
                
                </div>
                <h1 className="text-white text-2xl ml-10 mt-5 font-bold"> Release Date ~ {release_date}</h1>
                <p className="text-3xl font-bold m-10 text-white">{overview}</p>
              </div>
              <div className=" ml-80 w-1/2">
                <img src={IMG_CDN_URL + poster_path} alt="" />
              </div>
                
            </div>

        </div>
    </div>
  )
}

export default GptMovieSuggestion;
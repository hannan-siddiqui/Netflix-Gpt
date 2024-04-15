import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";
// import openai from "../utils/openAI";

const GptSearchBar = () => {
    
  const dispatch = useDispatch();

    const langkey = useSelector(store=>store.config.lang);
    const m = useSelector(store=>store.gpt.gptMovies);


    const searchText = useRef(null)

    const fetchMovie = async (movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

      const json = await data.json();
      // console.log(json.results[0]);

      return json.results[0];


    }

    const handelGptSearchClick = async ()=>{
        const Text = searchText.current.value;

        // calling fetchMovie()

        // fetchMovie(Text);
        
        // const query = "give me names of five movies comma separated which is" + Text; 
        
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: query }],
        //     model: 'gpt-3.5-turbo',
        //   });

        //   if (!gptResults) {
        //     // handling error
        //   } 

          
        //   // const dummyResponse = "m1, m2, m3, m4, m5, m6";

        //   const gptMovies = gptResults?.choices[0]?.message?.content?.split(",");

          // const dummyResponse = ["m1", "m2", "m3", "m4", "m5"];

          const gptMovies = [Text];

          const promiseArray = gptMovies.map(movie =>fetchMovie(movie));
          
          const tmdbResult = await Promise.all(promiseArray);

          dispatch(
            addGptMovies({movieName : Text, movieResults : tmdbResult})
            );

         


          //  for each movie search TMDB API
          


    }

  
   

  return (
    <div className="pt-[6%] flex  justify-center">
        <form  className=" w-1/2 p-2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>

            <input
            ref={searchText}
            className="text-lg col-span-8 mr-3  px-2  h-15 placeholder-red-500 font-bold text-red-500 placeholder:font-bold "
            type="text" placeholder= {lang[langkey].gptSearchPlaceHolder} />

            <button
            onClick={handelGptSearchClick}
            className="font-bold text-lg col-span-4 bg-red-600 p-2 rounded-lg "> {lang[langkey].search} </button>
            
        </form>
    </div>
  )
}

export default GptSearchBar
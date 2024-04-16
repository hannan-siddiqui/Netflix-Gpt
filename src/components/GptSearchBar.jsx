import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";


const GptSearchBar = () => {
    
  const dispatch = useDispatch();

    const langkey = useSelector(store=>store.config.lang);
    


    const searchText = useRef(null)

    const fetchMovie = async (movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

      const json = await data.json();
  

      return json.results[0];


    }

    const handelGptSearchClick = async ()=>{
        const Text = searchText.current.value;

        // calling fetchMovie()

      //  const tmdbResult =  fetchMovie(Text);
        
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
    <div className="mt-16 md:mt-0 flex justify-center ">
        <form  className=" h-40 items-center p-4 border-[3px] border-red-600 rounded-xl md:w-1/2  bg-black md:grid grid-cols-12 justify-center flex mt-16" onSubmit={(e)=>e.preventDefault()}>

            <input
            ref={searchText}
            className=" text-lg w-[90] md:col-span-8 mr-3  px-2 h-10 rounded-lg md:h-15 placeholder-red-500 font-bold text-red-500 placeholder:font-bold "
            type="text" placeholder= {lang[langkey].gptSearchPlaceHolder} />

            <button
            onClick={handelGptSearchClick}
            className="md:w-50 font-bold text-lg col-span-4 bg-red-600 p-2 rounded-lg "> {lang[langkey].search} </button>
            
        </form>
    </div>
  )
}

export default GptSearchBar
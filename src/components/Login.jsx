import { useState, useRef} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

  const [signform, setsignform] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  

  const toggleSignInForm = ()=>{
      setsignform(!signform)
  };

  const handleButtonClick = ()=>{
    // validate form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    
    if(message) return

    if(!signform){
      // signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        ).then((userCredential) => {
       // Signed up 
        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode+ " - "+errorMessage);
    });

    }

    else{
      // signIn logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // signedin
      const user = userCredential.user;
      console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ " - "+errorMessage);
  });

    }

  }

  return (

    <div  >
      <Header/>
      <div className="absolute">
      <img src="https://i.redd.it/zjgs096khv591.jpg" alt="" />
      </div>

      <form 
       onSubmit={(e)=>{e.preventDefault()}}
       className="absolute w-3/12 p-12 text-white bg-black bg-opacity-70 my-24 mx-auto right-0 left-0">

        <h1 className="font-bold text-3xl py-4 ">{signform?"Sign In" : "Sign Up"}</h1>

        {!signform && (<input 
        ref={name}
        type="text" placeholder="Full Name" 
        className="p-4 my-2 w-full bg-opacity-70 bg-black border border-red-700 rounded-lg"/>)}

        <input
        ref={email}
        type="text" placeholder="Email Address" 
        className="p-4 my-2 w-full bg-opacity-70 bg-black border border-red-700 rounded-lg"/>

        <input
        ref={password}
        type="password" placeholder="Password"
        className="p-4 my-2 w-full bg-opacity-70 bg-black border border-red-700 rounded-lg"/>

        <p
        className="text-red-600 text-lg font-bold py-2"
        >{errorMessage}</p>

        <button 
        onClick={handleButtonClick}
        className="py-4 my-4 h-12 bg-red-600 rounded-lg w-full  cursor-pointer"> {signform?"Sign In" : "Sign Up"}
        </button>
        
        <p className="py-4 px-4 cursor-pointer font-bold" 
        onClick={toggleSignInForm}>
        {signform?"new to netflix? sign up" : "Already member? sign in "}
        </p>

      </form>


    </div>



  )
}

export default Login;
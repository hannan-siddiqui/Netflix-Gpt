import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SupportedLanguages, logo_URL } from '../utils/constant';
import { toggleSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const showSearch = useSelector(store=>store.gpt.showSearchView);


  const dispatch = useDispatch()

  const changeLang = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  const handleGptSearch = ()=>{
    dispatch(toggleSearchView());
  };


  const handleSignOut = ()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
    
  }

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signed in ...
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser(
          {
            uid:uid, 
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          }));
          // navigation based on auth state changes
          navigate("/browse");
     
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
             
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <div className="absolute w-screen  px-40  z-10 flex items-center justify-between">
      <img 
      className="w-48"
      src={logo_URL} alt="404 error" />
      
       {user && <div className='flex items-center justify-center' >

{/* change language  */}
       
      <div>
      {showSearch &&
       (<select 
        onChange={changeLang}
        className='bg-red-600 font-bold p-2 rounded-lg mr-10 w-32 h-15'
        >
         

          {SupportedLanguages.map(lang => 
              <option
              key={lang.indentifier} value={lang.indentifier}
              className='bg-red-600 font-bold p-2 rounded-lg h-15'
              > 
              {lang.name}
               </option>
          )}
        
        </select>)
        }
        
      </div>

        <button 
        onClick={handleGptSearch}
        className='bg-red-600 p-2 rounded-lg mr-10 w-30 h-15'>
          {showSearch?"Home Page":" Gpt Search" }
        </button>

        <img className='w-12 h-15 ' src={user?.photoURL} alt="" />
        
        <button
        onClick={handleSignOut}
        className="bg-red-600 text-white p-2 rounded-lg mx-6 w-30 h-15">Sign-Out
        </button>

      </div>}

    </div>
  )
}

export default Header;
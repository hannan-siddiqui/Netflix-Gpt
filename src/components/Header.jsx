import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);

  const dispatch = useDispatch()


  const handleSignOut = ()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
    
  }

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
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
          
     
      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/");
             
      }
    });

  }, []);

  return (
    <div className="absolute w-screen px-40 z-10 flex items-center justify-between">
      <img 
      className="w-48"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="404 error" />
      
       {user && <div className='flex' >
        <img className='w-12 h-17 ' src={user?.photoURL} alt="" />
        
        <button
        onClick={handleSignOut}
        className="bg-red-600 text-white p-2 rounded-lg mx-6 ">Sign-Out
        </button>

      </div>}

    </div>
  )
}

export default Header;
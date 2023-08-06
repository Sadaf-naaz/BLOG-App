import React from 'react'
import {Link,useNavigate}from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Navbar = ({isAuth,settingAuth}) => {

    const navigate=useNavigate();

    const signUserOut=()=>{
        signOut(auth).then(()=>{
          localStorage.clear()
          settingAuth(false)
          navigate("/login")
        // window.location.pathname="/login";
        })
      }

  return (
    <nav>
      <Link to='/'>Home</Link>
      {!isAuth?<Link to='/login'>Login</Link>:(
      <>
      <Link to='/createpost'>CreatePost</Link>
      <button onClick={signUserOut}>LogOut</button>
      </>)}
    </nav>
  )
}

export default Navbar


import './App.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';

import Navbar from './pages/Navbar';

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"))

  

  const settingAuth=(bool)=>{
    setIsAuth(bool);
  }
  return (
    <Router>
      <Navbar isAuth={isAuth} settingAuth={settingAuth}/>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='createpost' element={<CreatePost isAuth={isAuth}/>}/>
        <Route path='login' element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

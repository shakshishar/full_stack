import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Login from './components/login';
import Signup from './components/register';
import Logout from './components/logout';
import Error from './components/error';
import { Routes, Route } from 'react-router-dom';
import './App.css';



const App=()=>{
  return(
    <>


    <Navbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*"element={<Error/>} />



    </Routes>

   

    </>
    


  )
    
}


export default  App;
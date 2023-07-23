import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import NavBar from './Compunents/NavBar';

function App() {

  return (

    <>
     <Router>
     
     <div>
   
       <Routes>
         
         <Route path='/' element={<Home  />} />
  
         

     
    
    
   
       </Routes>
     </div>
   </Router>
     
     
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import './App.css';

function App() {
  return (
   <Router>
     <Routes>
       <Route path ='/' element ={<Login />}/>
       <Route path = '/Signup' element ={<Signup/>}/>
     </Routes>
   </Router>
  );
}

export default App;

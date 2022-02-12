import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard'
import Navbar from './Component/Utils/Navbar';
import Sidebar from './Component/Utils/Sidebar'
import './App.css';
import {AuthProvider} from './context/AuthContext'


const App = () => {
  return (
    <Router>
    <AuthProvider>  
     <Routes>
      <Route path ='/' element ={<Login />}/>
      <Route path = '/Signup' element ={<Signup/>}/>
      <Route path ='/Dashboard' element ={<Dashboard/>}/>
      <Route path ='/Navbar' element ={<Navbar/>}/>
      <Route path = '/Sidebar' element ={<Sidebar/>}/>
    </Routes>
 </AuthProvider>
  </Router>
  )
};
export default App;




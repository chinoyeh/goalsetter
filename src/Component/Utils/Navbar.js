import React, {useState} from 'react';
import { useAuth } from '../../context/AuthContext'
import {Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [loading, setLoading] = useState(true)
    const {Logout, userDetails} = useAuth()
    const Navigate = useNavigate()
    const username = userDetails.username
    console.log (userDetails)

    function handleSubmit (){
    
        try{
            Logout()
            Navigate('/')
            setLoading (false)
        }
        catch {
            alert ('unable to Logout')
        }

    }
    
  return <div className='Navbar'>
      <div className='Logo'>
          <Link to ='/Dashboard'>
          <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmB9u4VYkDnQqqkI1gwJ6oK0joVGlCoH0ug&usqp=CAU' alt ='Logo'/>
      
          </Link>
  
      </div>
      <div className='navlinks'>
          <ul>
              <li>{username}</li>
          <li> <button variant="link" onClick={handleSubmit}>Logout</button></li>
          </ul>
      </div>

    
      
  </div>;
};

export default Navbar;

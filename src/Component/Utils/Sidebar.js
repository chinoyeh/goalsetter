import React from 'react';
import {Link} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css'

const Sidebar = () => {
  const {userDetails} = useAuth()
  const username = userDetails.username
  return <div className='Sidebar'>
           <div className = "SideProfile"><Link to ='/Profile'>
            <div className ='SideProfile-image'><img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJH22iium0uayPduvD-SFL6Ys-85x0SwuqiQ&usqp=CAU' alt =''/> </div>
            </Link>
            <h3>{username}</h3>
          
           </div>
        <div className = "Sidelinks">
            <ul>
                <li> <Link  to ='/Dashboard'>Dashboard</Link></li>
                <li> <Link to ='/Goals'> Goals</Link></li>
                <li> <Link to ='/Tasks'>Tasks</Link></li>
              
                  
            </ul>
        </div>
     

  </div>;
};

export default Sidebar;

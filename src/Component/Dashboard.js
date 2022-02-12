import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from './Utils/Navbar';
import Sidebar from './Utils/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    const {userDetails} = useAuth()
    const username = userDetails.username
  return <div className='dashboard'>
    <Navbar/>
    <Sidebar/>
 
    <h3>Hi {username},</h3>
  <div className='dashcontent'>
 
      <div className='goals'>
        <h3>Goals </h3>
        <p>You have accomplished </p>
        <p><span>0</span> goals</p>
      </div>
      <div className='goals'>
        <h3>Tasks </h3>
        <p>You have accomplished </p>
        <p><span>0</span> tasks</p>
      </div>
      <div>
    
      </div>
  </div>
  </div>
};

export default Dashboard;

import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function handleSubmit (e){
        e.preventDefault()
    }
  return <div>
      <h1> Welcome,</h1>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}> 
       
              <input 
              type ='email'
               name ='email' 
               value ={email} 
               onChange={(e)=> setEmail(e.target.value)}
               />
        
    
              <input 
              type ='password' 
              name ='password' 
              value ={password}
               onChange={(e)=> setPassword(e.target.value)}
               />
    
          <button type ='submit'>Login</button>
      </form>
      <p> Don't have an account? <Link to ='/Signup'>Signup</Link> </p>
  </div>;
};

export default Login;

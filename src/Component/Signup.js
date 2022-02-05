import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
     function handleSubmit (e){
        e.preventDefault()
     
    }

  return <div>
            <h1> Welcome,</h1>
            <h3>Signup</h3>

<form onSubmit={handleSubmit}> 

<input 
        type ='username'
         name ='username' 
         value ={username} 
         onChange={(e)=> setUsername(e.target.value)}
         />
  
 
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
<p> Already have an account? <Link to ='/'>Signup</Link> </p>

  </div>;
};

export default Signup;

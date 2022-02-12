import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './form.css'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {Signup} = useAuth()
    const navigate = useNavigate()
     function handleSubmit (e){
        e.preventDefault()
        try {
            setError('')
            setLoading (true)
            Signup(username,email,password )
       
           navigate("/Dashboard")
        } catch{
            setError('Failed to create an account')
        }
        setLoading (false)
     
    }

  return <div className = 'form'>
            <div className='logo'>
              <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmB9u4VYkDnQqqkI1gwJ6oK0joVGlCoH0ug&usqp=CAU' alt ='Logo'/>
              <h1> Welcome</h1>
            <h3>Signup</h3>
        
            </div>
         
<div className = 'register-form'>

<form onSubmit={handleSubmit}> 
        <h3 className='error'>{error}</h3>

        <input 
        type ='username'
         name ='username' 
         placeholder='Username'
         value ={username} 
         onChange={(e)=> setUsername(e.target.value)}
         />
  
 
        <input 
        type ='email'
         name ='email' 
         placeholder='Email'
         value ={email} 
         onChange={(e)=> setEmail(e.target.value)}
         />
  

        <input 
        type ='password' 
        name ='password' 
        placeholder='Password'
        value ={password}
         onChange={(e)=> setPassword(e.target.value)}
         />

    <button type ='submit'>Login</button>
</form>
<p> Already have an account? <Link to ='/'>Login</Link> </p>

  </div>
</div>
};

export default Signup;

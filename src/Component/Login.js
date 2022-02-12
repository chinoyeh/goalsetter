import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './form.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {Login} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit (e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            Login(email, password)
            navigate('/Dashboard')

        }
        catch{
            setError('Unable to Login')
        }
        setLoading(false)
    }
  return <div className='form'>
         <div className='logo'>
              <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmB9u4VYkDnQqqkI1gwJ6oK0joVGlCoH0ug&usqp=CAU' alt ='Logo'/>
              <h1> Welcome</h1>
            <h3>Login</h3>
        
            </div>
         
 <div className='register-form'>
<   form onSubmit={handleSubmit}> 
       <h3>{error}</h3>
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
</div>
  </div>
};

export default Login;

import React, {useContext, useState} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState ()
    const [loading, setLoading] = useState(true)
    
    function Signup (username, email, password){
        createUserWithEmailAndPassword (auth, email,password).then((currentUser)=>{
            username = currentUser.username
        })
    }

    const value ={
        currentUser,
        Login,
        Signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
      )
  }
  
  
import React, {useContext, useState} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider ({children}){
    const [loading, setLoading] = useState(true)

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
  
  
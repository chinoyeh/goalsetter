import React, {useContext, useState, useEffect} from 'react'
import {auth,db } from '../firebase'

import {set, ref, onValue} from 'firebase/database'

const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState ([])
    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState()
    
    function Signup (username, email, password){
        auth.createUserWithEmailAndPassword (email, password).then (()=>{ 
            const userId = auth.currentUser.uid
           
            set(ref(db, 'users/' + userId + '/details'),{
                email: email,
                username: username
              })
      
          
        })
    }
    function Login (email,password){
     return auth.signInWithEmailAndPassword (email,password)
    }
    function Logout() {
        return auth.signOut()
      }
    useEffect(() => {
        const unsubscribe=  auth.onAuthStateChanged(user =>{
           if (!user)
              setCurrentUser(user)
              setLoading(false)
             
          })
      
       return unsubscribe
      }, [])
      useEffect (()=>{
        if (!auth.currentUser?.uid ) return
        const userId =auth.currentUser.uid
        const dbRef = ref(db, 'users/' + userId + '/details')
        onValue (dbRef, (snapshot)=>{
            const data = snapshot.val();
            setUserDetails(data)
      
        })

      }, [auth.currentUser])

    const value ={
        currentUser,
        Login,
        Signup,
        Logout,
        userDetails
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
      )
  }

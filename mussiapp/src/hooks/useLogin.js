import {useState} from 'react'
import{useAutContext} from './useAuthContext'
import {appAuth} from '../Firebase/config'

export const useLogin =()=>{
   const[status,setStatus] =useState(null)
   const[error,setError] =useState(null)
   const {user,dispatch} =useAutContext()
const signIn=async(email,password)=>{
    setError(null)
    setStatus('loading')
    try{
    const res =  await 
    appAuth.signInWithEmailAndPassword(email,password)
    if(!res.user){
        throw new Error('Could not sign you in !!')
    }
    console.log('login function',res.user)
    setStatus('success')
    dispatch({type:'LOGIN',payload:res.user})
    }catch(err){
        setError(err.message)
        setStatus('Error')
    }
}

return {status,error}

}
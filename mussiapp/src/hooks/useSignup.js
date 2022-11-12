import {useState} from 'react'
import{useAutContext} from './useAuthContext'
import {appAuth} from '../Firebase/config'

export const useLogin =()=>{
   const[status,setStatus] =useState(null)
   const[error,setError] =useState(null)
   const {user,dispatch} =useAutContext()
const signUp=async(email,password,displayName)=>{
    setError(null)
    setStatus('loading')
    try{
    const res =  await 
    appAuth.createUserWithEmailAndPassword(email,password,displayName)
    if(!res.user){
        throw new Error('Could not sign you up !!')
    }
    console.log('signup function',res.user)
    setStatus('success')
    await res.user.updateProfile({displayName})
    dispatch({type:'LOGIN',payload:res.user})
    }catch(err){
        setError(err.message)
        setStatus('Error')
    }
}

return {status,error}

}
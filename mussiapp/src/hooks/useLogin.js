import {useState} from 'react'
import useAutContext from './useAuthContext'
import {appAuth,appFirestore} from '../Firebase/config'

export const useLogin =()=>{
   const[isPending,setIspending] =useState(false)
   const[error,setError] =useState(null)
   const {user,dispatch} =useAutContext()
const login=async(email,password)=>{
    setError(null)
    setIspending(true)
    try{
    const res =  await 
    appAuth.signInWithEmailAndPassword(email,password)
    if(!res.user){
        throw new Error('Could not sign you in !!')
    }
    const {uid} =res.user
    await appFirestore.collection('users').doc(uid).update({online:true}) 
    setIspending(false)
    dispatch({type:'LOGIN',payload:res.user})
    }catch(err){
        setError(err.message)
        setIspending(false)
    }
}

return {login,isPending,error}

}
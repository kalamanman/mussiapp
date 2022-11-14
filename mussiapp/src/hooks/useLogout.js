import {useState} from 'react'
import { appAuth } from '../Firebase/config'
import useAuthContext from './useAuthContext'
export const useLogout = () => {
    const [status,setStatus] =useState(null)
    const [error,setError] =useState(null)
    const {dispatch} =useAuthContext()
    const logout = async()=>{
        setError(null)
        setStatus('loading')
        try{
       await appAuth.signOut()
       dispatch({type:'LOGOUT'})// no need to dispatch payload :null
        }catch(err){
            setError(err.message)
            setStatus('error')
        }//catch ends
    }//logout
  return{logout,status,error}
}


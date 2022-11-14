import {useState} from 'react'
import { appAuth , appFirestore} from '../Firebase/config'
import useAuthContext from './useAuthContext'
export const useLogout = () => {
    const [status,setStatus] =useState(null)
    const [error,setError] =useState(null)
    const {user,dispatch} =useAuthContext()
    const logout = async()=>{
        setError(null)
        setStatus('loading')
        try{
            //update user online status
     const {uid} =user
       await appFirestore.collection('users').doc(uid).update({online:false}) 
       await appAuth.signOut()
       dispatch({type:'LOGOUT'})// no need to dispatch payload :null
       setStatus('success')
        }catch(err){
            setError(err.message)
            setStatus('error')
        }//catch ends
    }//logout
  return{logout,status,error}
}


import {useState} from 'react'
import{useAutContext} from './useAuthContext'
import {appAuth, appStorage} from '../Firebase/config'

export const useLogin =()=>{
   const[status,setStatus] =useState(null)
   const[error,setError] =useState(null)
   const {user,dispatch} =useAutContext()
const signUp=async(email,password,displayName,thumbnail)=>{
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
     //uplaodpath
     const uplaodPath =`Thumbnail/${res.user.uid}/${thumbnail.name}`
     const photo = await appStorage.ref(uplaodPath).put(thumbnail)
      // get photoURL
      const photoURL = await photo.ref.getDownloadURL()
      // update user profile with displayName and photo url
          await res.user.updateProfile({displayName,photoURL})

    //
    dispatch({type:'LOGIN',payload:res.user})
   

    }catch(err){
        setError(err.message)
        setStatus('error')
    }
}

return {status,error}

}
import {useState} from 'react'
import useAutContext from './useAuthContext'
import {appAuth, appFirestore, appStorage} from '../Firebase/config'

export const useSignup =()=>{
   const[isPending,setIspending] =useState(false)
   const[error,setError] =useState(null)
   const {dispatch} =useAutContext()
const signup=async(email,password,displayName,thumbnail)=>{
    setError(null)
    setIspending(true)
    try{
    const res =  await 
    appAuth.createUserWithEmailAndPassword(email,password)
    if(!res.user){
       setError("Could not sign you in")
        throw new Error('Could not sign you up !!')
    }
    
    
     //uplaodpath
     const uplaodPath =`Thumbnail/${res.user.uid}/${thumbnail.name}`
     const photo = await appStorage.ref(uplaodPath).put(thumbnail)
      // get photoURL
      const photoURL = await photo.ref.getDownloadURL()
      // update user profile with displayName and photo url
      await res.user.updateProfile({displayName,photoURL})
      //create user doc
      await appFirestore.collection('users').doc(res.user.uid).set({
        online:true,
        displayName,
        photoURL
      })

      setIspending(false)
    //
    dispatch({type:'LOGIN',payload:res.user})
   

    }catch(err){
        setError(err.message)
        setIspending(false)
    }
}

return {signup,isPending,error}

}
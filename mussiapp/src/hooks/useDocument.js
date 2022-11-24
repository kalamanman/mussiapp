import {useState,useEffect} from 'react'
import { appFirestore } from '../Firebase/config'

export const useDocument = (collection,id) => {

   const[document,setDocument]=useState(null)
   const[error,setError]=useState(null)
   const[isPending,setIsPending]=useState(false)
   //subscribe to doc
   useEffect(()=>{
    const ref = appFirestore.collection(collection).doc(id)
    setIsPending(true)
  const unsub = ref.onSnapshot(snapshot=>snapshot.data()?
      //we have a document
    setDocument({...snapshot.data(),id:snapshot.id}):
    //empty snapshot no document
    setError('No such document exists !!'),
    (err)=>{
    setError(err.message)
    setIsPending(false)
  })
  setIsPending(false)
  return ()=>unsub()
   },[collection,id])

  return {document,error,isPending}
}


import { useState,useEffect } from "react"
import { appFirestore } from "../Firebase/config"
export const useCollection = (collection) => {
     //init state
    const[isCancelled,setIsCancelled]=useState(false)
    const[docs,setDocs]=useState(null)
    const[error,setError] =useState(null)
    const[isPending,setIspending]=useState(false)


   //useEffect to fetch docs
   useEffect(()=>{
    let ref=appFirestore.collection(collection)
    setIspending(true)
    setError(false)
    
         const unsub =ref.onSnapshot(snapshot=>{
            const results=snapshot.docs.map(doc=>{
                return{...doc.data(),id:doc.id}
            })
                
                setDocs(results)
                setError(null)
                setIspending(false)
         
        },(err)=>{
            setIspending(false)
            console.log(err.message)
            setError(err.message)
        })
    
   return()=> unsub()
   },[collection])

  
return {docs,error,isPending}
}

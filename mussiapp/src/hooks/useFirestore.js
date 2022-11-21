import {useState,useReducer, useEffect} from 'react'
import { appFirestore, timestamp } from '../Firebase/config'
//initialState initResponse
const initResponse={
    error:null,
    isPending:false,
    document:null,
    success:null
}
//initResponse Reuducer
const resReducer=(state,action)=>{
    switch(action.type){
        case 'IS_PENDING':
            return{success:null,ducoment:null,error:null,isPending:true}
            case 'ERROR':
                return{success:null,document:null,isPending:false,error:action.payload}
        case 'ADDED_DOCUMENT':
            return{isPending:false,success:true,document:'document is saved',error:null}
              
    default :
    return state    
    }
}


export const useFirestore = (collection) => {
    const [response,dispatch]=useReducer(resReducer,initResponse)
  console.log('response:',response)
    const ref=appFirestore.collection(collection)
    //function  to add a document
    const addDocument = async(doc)=>{
        dispatch({type:'IS_PENDING'})
        const createdAt=timestamp.fromDate(new Date())
        try{
             await ref.add({...doc,createdAt})
             dispatch({type:'ADDED_DOCUMENT'})
        }catch(err){
            dispatch({type:'ERROR',payload:err.message})
        }
    }
   

    //delete document





    //update document




    return {addDocument,response}
}


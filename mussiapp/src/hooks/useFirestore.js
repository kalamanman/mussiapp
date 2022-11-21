import {useState,useReducer, useEffect} from 'react'
import { appFirestore } from '../Firebase/config'
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
        case 'ADD_DOCUMENT':
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
        try{
             await ref.add(doc)
             dispatch({type:'ADD_DOCUMENT'})
        }catch(err){
            dispatch({type:'ERROR',payload:err.message})
        }
    }
   

    //delete document





    //update document




    return {addDocument,response}
}


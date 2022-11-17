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
        case 'ADD_Document':
        //Add aDocument    
    default :
    return state    
    }
}


export const useFirestore = (collection) => {
    const [response,dispatch]=useReducer(resReducer,initResponse)
   
}


import {createContext,useEffect,useReducer} from 'react'
import { appAuth, appFirestore } from '../Firebase/config'
export const authContext = createContext()
export const authReducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
            return{...state,user:null}   
        case 'AUTH_READY':
            return {authIsReady:true, user:action.payload}
        default:
            return state    
    }
}

export const AuthProvider=({children})=>{
  const [state,dispatch] =  useReducer(authReducer,{
                        user:null,
                        authIsReady:null
                     })
    console.log('The state:',state)
    // user  auth status 
    useEffect(()=>{
    const unsub =appAuth.onAuthStateChanged(user=>{
        dispatch({type:'AUTH_READY',payload:user})
        unsub()
    })
    },[])
    return(
        <authContext.Provider value={{...state,dispatch}}>
            {children}
        </authContext.Provider>
    )
}

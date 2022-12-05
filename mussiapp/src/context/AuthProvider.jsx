import {useEffect,useReducer} from 'react'
import { appAuth } from '../Firebase/config'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

 const AuthProvider=({children})=>{
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
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
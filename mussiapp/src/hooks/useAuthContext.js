import { useContext } from "react"
import { authContext } from "../context/AuthProvider"


export const useAuthContext=()=>{

    const context =useContext(authContext)
      if (!context){
        throw Error ('useAuthContext must be used inside AuthProvider')
      }

    return context
}
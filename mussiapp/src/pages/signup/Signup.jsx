import {useState} from 'react'
//styles
import './Signup.css'
const Signup = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword] =useState('')
    const[displayName,setDisplayName]=useState('')
    
  return (
    <form  className="signup-form">
        <label>
            <span>email:</span>
            <input type="text"
               
               onChange={(e)=>setEmail(e.target.value)}
               value={email}             
            />
        </label>
        <label>
            <span>Password:</span>
            <input type="password"
               required
               onChange={(e)=>setPassword(e.target.value)}
               value={password}             
            />
        </label>
        <label>
            <span>Display Name:</span>
            <input type="text"
               required
               onChange={(e)=>setDisplayName(e.target.value)}
               value={displayName}             
            />
        </label>
        
        <button className="btn">Signup</button>
    </form>
  )
}

export default Signup
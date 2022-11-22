import {useState} from 'react'
import {useLogin} from '../../hooks/useLogin'
//styles
import './Login.css'
const Login = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword] =useState('')
    
    const {login,isPending,error} = useLogin()
    //submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        login(email,password)
    }
    
    
  return (

    <form  className="login-form">
    <h2>Log In</h2>
        <label>
            <span>email:</span>
            <input type="email"
               required
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
           {!isPending?<button className="btn"onClick={handleSubmit}>Login</button>:''}
           {isPending?<button className="btn" disabled>Loading ...</button>:''}
           {error&&  <p className='error'>{error}</p> }
    </form>
    
  )
}
export default Login
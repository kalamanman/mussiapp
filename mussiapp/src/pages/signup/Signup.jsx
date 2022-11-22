import {useState} from 'react'
import {useSignup} from '../../hooks/useSignup'
//styles
import './Signup.css'
const Signup = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword] =useState('')
    const[displayName,setDisplayName]=useState('')
    const[thumbnail,setThumbnail] =useState(null)
    const[thumbnailError,setThumbnailError]=useState('')
    const {signup,isPending,error} = useSignup()
    //submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!thumbnail){
setThumbnailError('Please select an image FILE for your profile !')
return
        }
        signup(email,password,displayName,thumbnail)
    }
    //handleClick
    
      //handleFileChange
      const handleFile=(e)=>{
        setThumbnail(null)
        setThumbnailError('')
        let selected = e.target.files[0]
        
    if(!selected){
        setThumbnailError('Please select a file')
    }
    
    if(!selected.type.includes('image')){
        setThumbnailError('Please choose an image file !')
        return
    }
    if (selected.size>100000){
        setThumbnailError('File  has to be less than 100 Kbytes !')
        return
    }
        
    setThumbnail( selected)
    
      }
    
  return (
      
      
    
    <form  className="signup-form">
    <h2>Sign Up</h2>
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
        <label>
            <span>Display Name:</span>
            <input type="text"
               required
               onChange={(e)=>setDisplayName(e.target.value)}
               value={displayName}             
            />
        </label>
        <label>
            <span>Profile thumbnail:</span>
            <input 
                type="file"
                
                onChange={handleFile}
                   
            />
        </label>
        {thumbnailError&&  <p className='error'>{thumbnailError}</p> }
        {error&&  <p className='error'>{error}</p> }
        <button className="btn"onClick={handleSubmit}>Signup</button>
        
    </form>
    
  )
}

export default Signup
import {useState} from 'react'
//styles
import './Signup.css'
const Signup = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword] =useState('')
    const[displayName,setDisplayName]=useState('')
    const[thumbnail,setThumbnail] =useState(null)
    const[thumbnailError,setThumbnailError]=useState('')
    
    //submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('thumb',thumbnail,thumbnailError)
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
    if (selected.size>1000000){
        setThumbnailError('File  has to be less than 1 Kbytes !')
        return
    }
        
    setThumbnail( selected)
    
      }
    
  return (
    <form  className="signup-form">
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
        
        <button className="btn"onClick={handleSubmit}>Signup</button>
        {thumbnailError&&  <p className='error'>{thumbnailError}</p> }
    </form>
  )
}

export default Signup
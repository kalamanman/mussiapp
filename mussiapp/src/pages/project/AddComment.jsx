import {useState} from 'react'
import AddIcon from '../../assets/add_icon.svg'
import { useFirestore } from '../../hooks/useFirestore'
import useAuthContext from '../../hooks/useAuthContext'
import { timestamp } from '../../Firebase/config'
import Avetar from '../../components/avetar/Avetar'

const AddComment = ({project}) => {
    const[newComment,setNewComment]=useState('')
    const {updateDocument,response}=useFirestore('projects')
    const {user} =useAuthContext()
const handleSubmit=async (e)=>{
  e.preventDefault()
  const comment={
    displayName:user.displayName,
    phtotURL:user.photoURL,
    content:newComment,
    createdAt:timestamp.fromDate(new Date()),
    id:Math.floor((Math.random()*1000000)),
    
  }

  //spread comments array and add the new comment
         await updateDocument(project.id,{comments:[...project.comments,comment]})
  if( !response.error){
    setNewComment('')
  }
}

  return (
            
          
    <div className='Add-comment'>
      
        <h4>Add comment</h4>
        <form className='addcomment-form' onSubmit={handleSubmit}>
            <label>
                <span>Add comment :</span>
                <textarea 
                required
                onChange={e=>setNewComment(e.target.value)}
                value={newComment}
                ></textarea>
            </label>
            <button className='btn' > 
               <span>
                 <img src={AddIcon} alt="add icon"  />Add project 
                 </span>
         </button>
         
        </form>
        
        </div>
      
    )
}

export default AddComment
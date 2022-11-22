import {useState} from 'react'
import AddIcon from '../../assets/add_icon.svg'
const AddComment = ({projectId}) => {
    const[newComment,setNewComment]=useState('')
  return (
    <div className='Add-comment'>
        <h4>Add comment</h4>
        <form className='addcomment-form'>
            <label>
                <span>Add comment :</span>
                <textarea 
                required
                onChange={e=>set}
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
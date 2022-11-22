import {useEffect, useState} from 'react'
import Select  from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import { timestamp } from '../../Firebase/config'
import useAuthContext from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import AddIcon from '../../assets/add_icon.svg'
//styles
import './Create.css'
import { useFirestore } from '../../hooks/useFirestore'

//option array
const categories=[
  {value:'development',label:'Development'},
  {value:'design',label:'Design'},
  {value:'sales',label:'Sales'},
  {value:'marketing',label:'Marketing'},
]

const Create = () => {
{/**State */}
const {error,docs}= useCollection('users')
const[users,setUsers]=useState([])
  const[name,setName]=useState('')
  const[category,setCategory]=useState('')
  const[details,setDetails]=useState('')
  const[dueDate,setDuedate]=useState('')
  const[assignees,setAssignees]=useState(null)
  const[formError,setFormError]=useState(null)
  const{user}=useAuthContext()
  const{addDocument,response}=useFirestore('projects')
  const navigate =useNavigate()

  {/**handleSubmit */}
  const handleSubmit= async (e)=>{
    e.preventDefault()
    setFormError(null)
          if(!category){setFormError('Please select project category')
           return} 
           if(!assignees){
            setFormError('Please assign at least one user for the project')
            return
           }
      //create project object
   
      const createdBy= {
        displayName:user.displayName,
        id:user.uid,
        photoURL:user.photoURL,
        
      }
      const assignedUsers= assignees.map(assignee=>({
        id:assignee.value.id,
        photoURL:assignee.value.photoURL,
        displayName:assignee.value.displayName
      }))
      const project ={
        name,
        details,
        category,
        dueDate:timestamp.fromDate(new Date(dueDate)),
        comments:[],
        createdBy,
        assignedUsers
      }
   await addDocument(project)
   // will direct only when response success saved doc to database
   
  
  }
  // useCollection to get users
 
    
 useEffect(()=>{
  if(docs){
  const options=  docs.map(user=>({value:user,label:user.displayName})
   )
  setUsers(options)
  }
  if(response.error){
    setFormError(`useFirestore response :${response.error}`)
  }
  if(response.success){
    navigate('/')
   }
 },[docs,response])
  return (
      
    <div className='create-form' >
         <h2>Create a new project</h2>
        { /******form fields */}
        <form onSubmit={handleSubmit}>
         <label >
          <span>Project name:</span>
          <input 
          required
          type="text"
          onChange={(e)=>setName(e.target.value)}
          value={name}
           />
         
         </label>
         {/****details field */}
         <label >
          
          <span>Project details:</span>
          <textarea
          required
          type="text"
          onChange={(e)=>setDetails(e.target.value)}
          value={details}
           ></textarea>
         </label>
         <label >
          <span>Project due date:</span>
          <input 
          required
          type="date"
          onChange={(e)=>setDuedate(e.target.value)}
          value={dueDate}
           />
         
         </label>
         <label>
          <span>Select project category</span>
          <Select
            options={categories}
            //destructure the value property of selected object
            onChange={({value})=>setCategory(value)}
          />
         </label>
         <label>
          <span>Select project User</span>
          <Select
            options={users}
            //destructure the value property of selected object
            onChange={(selection)=>setAssignees(selection)}
            isMulti
          />
         </label>
           {}
         <button className='btn' > 
         <span><img src={AddIcon} alt="add icon"  />Add project</span></button>
         
      {error && <div className='error'>{error}</div> }
      {formError&& <p className='error'>{formError} </p>}
         </form>
    </div>
  )
}

export default Create
import {useEffect, useState} from 'react'
import Select  from 'react-select'
import { useCollection } from '../../hooks/useCollection'
//styles
import './Create.css'
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
  const[assignees,setAssignees]=useState([])
  {/**handleSubmit */}
  const handleSubmit=(e)=>{
    e.preventDefault()

    console.log('hjjhjhjhhjh',name,details,dueDate,category,assignees)
  }
  // useCollection to get users
 
    
 useEffect(()=>{
  if(docs){
  const options=  docs.map(user=>({value:user,label:user.displayName})
   )
  setUsers(options)
  }
 },[docs])
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
            onChange={(selection)=>setCategory(selection)}
          />
         </label>
         <label>
          <span>Select project User</span>
          <Select
            options={users}
            onChange={(selection)=>setAssignees(selection)}
            isMulti
          />
         </label>
       
         <button className='btn' >Add project</button>
         
      {error && <div className='error'>{error}</div> }
         </form>
    </div>
  )
}

export default Create
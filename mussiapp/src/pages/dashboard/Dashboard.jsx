import { useState } from 'react'
import ProjectList from './ProjectList'
import { useCollection } from '../../hooks/useCollection'
import ProjectFilter from './ProjectFilter'
import useAuthContext from '../../hooks/useAuthContext'
//styles
import './Dashboard.css'

export const Dashboard = () => {
 const {user}= useAuthContext()
  const[currentFilter,setCurrentFilter]=useState('all')
  const {docs,error,isPending}=useCollection('projects')
  console.log(currentFilter)
 const projects =docs &&docs.filter((project)=>{
  switch(currentFilter){
 
    case 'all':
      return true
     case 'mine':
      let me =false
     project.assignedUsers.map(u=>{
      console.log(u.id,user.uid)
      if(u.id===user.uid){
        //if is assigned to the currently logged user
        me=true  
      }
      
     })
     //return after iteration finished with all assigned users
  return me
    case'sales':
    case'development':
    case'marketing':
    case'design':
    return project.category===currentFilter
    default:
      return true
  }

 })
  return (
   
    <div >
      <ProjectFilter currentFilter={currentFilter} 
      setCurrentFilter={setCurrentFilter}/>
       {isPending && (<div> Is loading ...</div>) }
       {error &&<p className='error' >{error}</p> }
       {docs && <ProjectList projects={projects}/>}
    </div>
  )
}

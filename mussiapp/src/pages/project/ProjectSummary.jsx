import Avetar from '../../components/avetar/Avetar'
import AddComment from './AddComment'
import Temple from '../../assets/temple.png'
import './Project.css'
import useAuthContext from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigate } from 'react-router-dom'
const ProjectSummary = ({project}) => {
   const {user} = useAuthContext()
   const{deleteDocument}       =useFirestore('projects')
      const navigate  =                 useNavigate()
    //handleDelete
    const handleDelete=async(id)=>{
      await deleteDocument(id)
      navigate('/')
    }

  return (
    <div>

{project&& <div className='card'>
        <h4>{project.name} </h4>
        
             <p>Category: {project.category} </p>
             <p> Created by : {project.createdBy.displayName} </p>
             <p>Created on : {project.createdAt.toDate().toString()}</p>
             <p>Due date : {project.dueDate.toDate().toString()}</p>
             <hr />
             <h5>Project details :</h5>
             <p className='details'>{project.details}</p>
             <h5>Assigned users :</h5>
             <ul className='assigned-users' >
              {project.assignedUsers.map(u=>(
                <li key={u.id}>
                  <span id='users'>
                  <Avetar src={u.photoURL}/>
                <p>{u.displayName}</p>
                  </span>
                
              </li>
              ))
            }
             </ul>
             <span id='temple'><img  src={Temple}/>MussiApp</span>
      </div> }

  { user.uid===project.createdBy.id &&
    <button className='btn' onClick={()=>handleDelete(project.id)} >
    Delete</button>}

      </div> 
  )
  
}

export default ProjectSummary
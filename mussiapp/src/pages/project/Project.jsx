import { useDocument } from '../../hooks/useDocument'
import {useParams} from 'react-router-dom'
import Avetar from '../../components/avetar/Avetar'
import './Project.css'



const Project = () => {
  const {id}=useParams()
  const{document:project,error,isPending}=useDocument('projects',id)
  return (
    <div className='project-container' >
      {isPending &&<p>Is loading ...</p> }
      {error && <p className='error' >{error} </p> }
      {project&& <div className='card'>
        <h4>{project.name} </h4>
        
             <p>Category: {project.category} </p>
             <p> Created by : {project.createdBy.displayName} </p>
             <p>Created on : {project.createdAt.toDate().toString()}</p>
             <p>Due date : {project.dueDate.toDate().toString()}</p>
             <hr />
             <p className='details'>{project.details}</p>
             <h5>Assigned users :</h5>
             <ul className='assigned-users' >
              {project.assignedUsers.map(u=>(
                <li>
                  <span>
                  <Avetar src={u.photoURL}/>
                <p>{u.displayName}</p>
                  </span>
                
              </li>
              ))
            }
             </ul>
      </div> } 
      </div>
  )
}

export default Project
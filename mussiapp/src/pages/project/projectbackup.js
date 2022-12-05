import { useDocument } from '../../hooks/useDocument'
import {useParams} from 'react-router-dom'
import Avetar from '../../components/avetar/Avetar'
import AddComment from './AddComment'
import Temple from '../../assets/temple.svg'
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
             <h5>Project details :</h5>
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
             <span id='temple'><img  src={Temple}/>MussiApp</span>
      </div> } 
       <ul>
       <div className='AddComment-container'>
     
     <AddComment project={project} />
     </div>
        
     {project &&
     <div id='comments'>
     <h4>project comments :</h4>
       {project.comments.length >0 &&project.comments.map(comment=>(
          <li className="author">
            <span>
            <Avetar src={comment.phtotURL}/>
            <p className='display-name'>{comment.displayName} </p>
            </span>
             
             <p className="date">date here</p>
            <p className='content'>{comment.content} </p>
          
          </li>
        ))}
       </div>
}
      </ul>
      </div>
  )
}

export default Project
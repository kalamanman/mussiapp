import {Link} from 'react-router-dom'
import Avetar from '../../components/avetar/Avetar'
const ProjectList = ({projects}) => {
  return (
    <div className='projects-grid'>
      {projects.length>0?projects.map(project=>(
        <Link  to={`/project/${project.id}`}
        key={project.id}  
        className='card' >
            <h3>{project.name} </h3>
            <p>Category: {project.category} </p>
             <p> Created by: {project.createdBy.displayName} </p>
             <p>Due date: {project.dueDate.toDate().toString()}</p>
              <Link to={`/project/${project.id}`}
               className='btn'>Project Summary</Link>
               <h5>Assigned users</h5>
            {project.assignedUsers.map(u=>(
                <Avetar src={u.photoURL} key={u.photoURL}/>
            ))}

        </Link>
      )): <p>No projects yet !</p>
    }
    </div>
  )
}

export default ProjectList
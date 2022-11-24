import { useDocument } from '../../hooks/useDocument'
import {useParams} from 'react-router-dom'
import ProjectSummary from './ProjectSummary'
import AddComment from './AddComment'
import CommentsList from './commentsList'
import './Project.css'

const Project = () => {
  const {id}=useParams()
  const{document,error,isPending}=useDocument('projects',id)
  
      
       return(
      
        <div className='project'>
          {isPending&& <p>Loading </p> } 
            {error && <p className="error">{error} </p> } 
            {document&&
            
          (<>
          <div className='summary'>
            
            <ProjectSummary project={document}/>
            <AddComment project={document}/>
         
            </div>
             
            <div className="comments">
            
          {document&&<CommentsList project={document}/>}
          </div>
          </>
          )

        }
      
          </div>
      
       )
      }
export default Project
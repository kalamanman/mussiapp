import Avetar from "../../components/avetar/Avetar"

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const CommentsList = ({project}) => {
  return (
    <ul >
      <h4>Comments</h4>
           {project.comments.length >0 &&[...project.comments]
           //shallow copy and sort in descending order by createdAt field
           .sort((a,b)=>a.createdAt-b.createdAt<0)
           .map(comment=>(
          <li   key={comment.id} id='comment'>
            <span>
            <Avetar src={comment.photoURL} alt="image"/>
            <p className='display-name'>{comment.displayName} </p>
            <p > <em>
             {formatDistanceToNow
             (comment.createdAt.toDate(),{addSuffix:true})}
						 </em>
                </p>
            </span>
            <p>{comment.content} </p>
             
             
            
           
       </li>   
          
        ))}
    </ul>
  )
}

export default CommentsList

import ProjectList from './ProjectList'
import { useCollection } from '../../hooks/useCollection'
//styles
import './Dashboard.css'

export const Dashboard = () => {
  const {docs,error,isPending}=useCollection('projects')
  return (
   
    <div >
       {isPending && (<div> Is loading ...</div>) }
       {error &&<p className='error' >{error}</p> }
       {docs && <ProjectList projects={docs}/>}
    </div>
  )
}

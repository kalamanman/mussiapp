import './OnlineUsers.css'
import { useCollection } from '../../hooks/useCollection'
import useAuthContext from '../../hooks/useAuthContext'

const OnlineUsers = () => {
     const {user}=useAuthContext()
     const uid =user.uid
    const {error,docs:users}= useCollection('users')
    
  return (
    <div className='online-users'>
        <h2 className="all-users">All Users</h2>
        {error && <div className='error'>{error} </div> }
        {users && users.map(user=>(
            <div key={user.id} className='user'>
                <span className={user.online?'online':'offline'}></span>
                <img src={user.photoURL}  alt="avatar image" className='avatar'/>
                <span  className='display-name'>
                    {user.id===uid ?
                    'You are online' :user.displayName} 
                </span>
            </div>
        ))}

    </div>
  )
}

export default OnlineUsers
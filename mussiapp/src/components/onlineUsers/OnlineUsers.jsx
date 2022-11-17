import './OnlineUsers.css'
import { useCollection } from '../../hooks/useCollection'

const OnlineUsers = () => {
    const {error,docs:users}= useCollection('users')
    console.log(users)
  return (
    <div className='online-users'>
        <h2 className="all-users">All Users</h2>
        {error && <div className='error'>{error} </div> }
        {users && users.map(user=>(
            <div key={user.id} className='user'>
                <span className={user.online?'online':'offline'}></span>
                <img src={user.photoURL}  alt="avatar image" className='avatar'/>
                <span  className='display-name'>{user.displayName} </span>
            </div>
        ))}

    </div>
  )
}

export default OnlineUsers
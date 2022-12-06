
import './Navbar.css'
import {Link} from 'react-router-dom'
import Temple from '../../assets/temple.png'
import { useLogout } from '../../hooks/useLogout'
import useAuthContext from '../../hooks/useAuthContext'

const Navbar = () => {
  const {logout,isPending,error}= useLogout()
  const {user} =useAuthContext()
  return (
    <div className="nav">
        <ul >
            <li className="logo">
                <img src={Temple} alt=""  />
                <span className="title">MussiApp <p id='newman'>By K Newman</p> </span>
            </li>
            {!user && (<>
              <li><Link to ='/login'>Login</Link></li>
            <li><Link to ='/signup'>Signup</Link></li>
            </>)}
            {user && (
            <li>
             {!isPending && <button className="btn"onClick={logout}>Logout</button>}
             {isPending && <button className="btn"  disabled>Login out ...</button>}
              </li>
              )}
        </ul>
    </div>
  )
}

export default Navbar
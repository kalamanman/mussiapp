
import './Navbar.css'
import {Link} from 'react-router-dom'
import Temple from '../../assets/temple.svg'

const Navbar = () => {
  return (
    <div className="nav">
        <ul >
            <li className="logo">
                <img src={Temple} alt=""  />
                <span className="title">MussiApp</span>
            </li>
            <li><Link to ='/login'>Login</Link></li>
            <li><Link to ='/signup'>Signup</Link></li>
            <li><button className="btn">Logout</button></li>
        </ul>
    </div>
  )
}

export default Navbar
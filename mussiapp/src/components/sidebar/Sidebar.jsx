import{NavLink} from 'react-router-dom'
import './Sidebar.css'
import DashboardIcon from '../../assets/dashboard_icon.svg'
import AddIcon from '../../assets/add_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className="content">
            <div className="user">
                {/*  avetar and user later */}
                <p> hey user</p>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink to ='/'>
                            <img src={DashboardIcon} alt="dashboard icon"  />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/create'>
                            <img src={AddIcon} alt="add icon"  />
                            <span>Add New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        
        Sidebar
  </div>
  )
}

export default Sidebar
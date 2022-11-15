

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import  useAuthContext from './hooks/useAuthContext'

//styles
import './App.css'
import { Dashboard } from './pages/dashboard/Dashboard'
import Signup from './pages/signup/signup'
import Login from './pages/login/Login'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  
    const {authIsReady,user} =useAuthContext()
    
  return (
   
    <div className="App">
       {authIsReady && (
      <BrowserRouter>
      {user &&<Sidebar/>}
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path='/' element={user?<Dashboard/>:<Navigate to='/login'/>}/>
          <Route path='/signup' element={!user?<Signup/>:<Navigate to ='/'/>}/>
          <Route path='/login' element={!user?<Login/>:<Navigate to='/'/>}/>
          <Route path='/create' element={user?<Create/>:<Navigate to ='/login'/>}/>
          <Route path='/project/:id/*' element={user?<Project/>:<Navigate to ='/login'/>}/>
        </Routes>
    
    
      </div>
      </BrowserRouter>
      )}
    </div>
   
  )
}

export default App

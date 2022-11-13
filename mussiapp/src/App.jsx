

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
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
  
    const {user} =useAuthContext()
  return (
    <div className="App">
      
      <BrowserRouter>
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/project/:id' element={<Project/>}/>
        </Routes>
    
    
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

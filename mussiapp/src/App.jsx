

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//styles
import './App.css'
import { Dashboard } from './pages/dashboard/Dashboard'
import Signup from './pages/signup/signup'
import Login from './pages/login/Login'
import Create from './pages/create/Create'
import Project from './pages/project/Project'

function App() {
  
    const {user} =useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
    
    
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

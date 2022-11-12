

import './App.css'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  
    const {user} =useAuthContext()
  return (
    <div className="App">
      <div className="container">
    
    <button className="btn">Hello</button>
      </div>
    </div>
  )
}

export default App

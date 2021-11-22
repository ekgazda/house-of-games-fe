import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from './contexts/user'
import Home from './components/Home'
import UserProfile from './components/UserProfile.js'

function App() {
  const [currentUser, setCurrentUser] = useState([])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className='App'>
        <header className='App-header'>
          <h2>House of Games</h2>
        </header>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/my-account' element={<UserProfile />} />
        </Routes>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App

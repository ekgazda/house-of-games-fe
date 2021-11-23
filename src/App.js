import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import UserProfile from './components/UserProfile.js'
import { UserProvider } from './contexts/UserContext'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
      <div className='App'>
        <header className='App-header'>
          <h2>House of Games</h2>
        </header>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/my-account' element={<UserProfile />} />
        </Routes>
      </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

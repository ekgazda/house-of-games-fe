import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import UserProfile from './components/UserProfile.js'
import { UserProvider } from './contexts/UserContext'
import Reviews from './components/Reviews'
import SingleCategory from './components/SingleCategory'

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
          <Route path='/reviews' element={<Reviews />} />
          <Route
            path='/reviews/categories/:slug'
            element={<SingleCategory />}/>
        </Routes>
      </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

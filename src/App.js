import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile.js'
import { UserProvider } from './contexts/UserContext'
import { getReviews } from './utils/api'
import Reviews from './components/Reviews'
import SingleCategory from './components/SingleCategory'
import SingleReview from './components/SingleReview'

const App = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews)
    })
  }, [])

  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <h2>House of Games</h2>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/my-account" element={<UserProfile reviews={reviews} />} />
            <Route path="/reviews" element={<Reviews reviews={reviews} />} />
            <Route
              path="/reviews/categories/:slug"
              element={<SingleCategory />}
            />
            <Route path="/reviews/:id" element={<SingleReview />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

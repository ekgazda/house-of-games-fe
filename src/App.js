import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { getReviews } from './utils/api'
import ErrorPage from './components/ErrorPage'
import BadPath from './components/BadPath'
import Home from './components/Home'
import UserProfile from './components/UserProfile.js'
import Reviews from './components/Reviews'
import SingleReview from './components/SingleReview'

const App = () => {
  const [reviews, setReviews] = useState([])
  const [err, setErr] = useState(null)

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        setReviews(reviews)
      })
      .catch((err) => setErr(err.response))
  }, [])

  if (err) {
    return <ErrorPage err={err} />
  }

  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <h2>House of Games</h2>
          </header>
          <Routes>
            <Route path="*" element={<BadPath />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/my-account"
              element={<UserProfile reviews={reviews} />}
            />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:id" element={<SingleReview />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { getUserByUserName } from '../utils/api'
import Nav from './Nav'
import ReviewCard from './ReviewCard'
import ErrorPage from './ErrorPage'

const UserProfile = ({ reviews }) => {
  const { currentUser } = useContext(UserContext)
  const [userDetails, setUserDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    getUserByUserName(currentUser)
      .then((user) => {
        setLoading(false)
        setUserDetails(user)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }, [currentUser])

  if (!currentUser) {
    return <Navigate to={'/home'} replace />
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (err) {
    return <ErrorPage err={err} />
  }

  return (
    <>
      <Nav />
      <main className="UserProfile">
        <h3>Hello {userDetails.name}!</h3>
        <img src={userDetails.avatar_url} alt="Avatar" className="Avatar"></img>
        <h3>My reviews:</h3>
        <div className="Reviews">
          {reviews
            .filter((review) => review.owner === currentUser)
            .map((review) => {
              return <ReviewCard key={review.review_id} {...review} />
            })}
        </div>
      </main>
    </>
  )
}

export default UserProfile

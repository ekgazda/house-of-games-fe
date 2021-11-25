import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { getUserByUserName } from '../utils/api'
import Nav from './Nav'
import ReviewCard from './ReviewCard'

const UserProfile = ({ reviews }) => {
  const { currentUser } = useContext(UserContext)
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    getUserByUserName(currentUser).then((user) => {
      setUserDetails(user)
    })
  }, [currentUser])

  return (
    <>
      <Nav />
      <main className='UserProfile'>
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

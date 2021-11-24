import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { getUserByUserName } from '../utils/api'
import Nav from './Nav'


const UserProfile = ({reviews}) => {
  const { currentUser } = useContext(UserContext)
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    getUserByUserName(currentUser).then((user) => {
      setUserDetails(user)
    })
  }, [currentUser])
  
  return (
    <><Nav />
      <h3>Hello {userDetails.name}!</h3>
      <img src={userDetails.avatar_url} alt='Avatar' className='Avatar'></img>
      <h3>My reviews:</h3>
      <div className="Reviews">
        {reviews.filter((review) => review.owner === currentUser).map((review) => {
          return (
            <div className="ReviewCard">
              <p><b>{review.title}</b></p>
              <p>category: {review.category}</p>
              <img
                src={review.review_img_url}
                alt="Review"
                className="ReviewImg"
              ></img>
              <p>votes: {review.votes}</p>
              <p>comments: {review.comment_count}</p>
              <Link to={`/reviews/${review.review_id}`} className="ReadMore">
                Read more...
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserProfile
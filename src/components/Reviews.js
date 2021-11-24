import { useState, useEffect } from 'react'
import { getReviews } from '../utils/api'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Categories from './Categories'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews)
    })
  }, [])

  return (
    <>
      <Nav />
      <Categories />
      <div className="Reviews">
        {reviews.map((review) => {
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

export default Reviews

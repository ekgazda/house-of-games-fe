import { getReviewById } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'

const SingleReview = () => {
  const { id } = useParams()
  const [review, setReview] = useState([])

  useEffect(() => {
    getReviewById(id).then((review) => {
      setReview(review)
    })
  }, [id])

  return (
    <>
      <Nav />
      <div className="SingleReview">
        <div className="SingleReview">
          <p><b>{review.title}</b></p>
          <p>designer: {review.designer}</p>
          <p>category: {review.category}</p>
          <img src={review.review_img_url} alt="Review" className="ReviewImg" />
          <p>{review.review_body}</p>
          <p>posted: {review.created_at}</p>
          <p>author: {review.owner}</p>
          <p>votes: {review.votes}</p>
          <p>comments: {review.comment_count}</p>
        </div>
      </div>
    </>
  )
}

export default SingleReview

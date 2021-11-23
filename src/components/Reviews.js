import { useState, useEffect } from 'react'
import { getReviews } from '../utils/api'
import Nav from './Nav'
import Categories from './Categories'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then(reviews => {
      setReviews(reviews)
    })
  }, [])

  return (
    <><Nav />
      <Categories />
    <div className='Reviews'>
      {reviews.map(review => {
        return (
          <div className='ReviewCard'><p>title: {review.title}</p>
            <p>category: {review.category}</p>
            <img src={review.review_img_url} alt='Review' className='ReviewImg'></img>
            <p>review: {review.review_body}</p>
            <p>posted: {review.created_at}</p>
            <p>author: {review.owner}</p>
            <p>votes: {review.votes}</p>
            <p>comments: {review.comment_count}</p>
          </div>
        )
      })}
    </div></>
  )
}

export default Reviews
import { getReviewByCategory } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Nav from './Nav'
import Categories from './Categories'

const SingleCategory = () => {
  const { slug } = useParams()
  const [filteredReviews, setFilteredReviews] = useState([]) 

  useEffect(() => {
    getReviewByCategory(slug).then((reviews) => {
      setFilteredReviews(reviews)
    })
  }, [slug]) 
    
  return (
    <><Nav />
      <Categories />
    <div>
      {filteredReviews.map(review => {
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

export default SingleCategory

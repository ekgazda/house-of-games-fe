import { getReviewByCategory } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
    <>
      <Nav />
      <Categories />
      <div>
        {filteredReviews.map((review) => {
          return (
            <div className="ReviewCard">
              <p>title: {review.title}</p>
              <p>designer: {review.designer}</p>
              <p>category: {review.category}</p>
              <img src={review.review_img_url} alt="Review" className="ReviewImg" />
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

export default SingleCategory

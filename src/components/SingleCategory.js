import { getReviewByCategory } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import Categories from './Categories'
import ReviewCard from './ReviewCard'

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
      <div className="Reviews">
        {filteredReviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />
        })}
      </div>
    </>
  )
}

export default SingleCategory

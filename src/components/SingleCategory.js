import { getReviewByCategory } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SortReviews from './SortReviews'
import ReviewCard from './ReviewCard'
import ErrorPage from './ErrorPage'

const SingleCategory = () => {
  const { slug } = useParams()
  const [filteredReviews, setFilteredReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    getReviewByCategory(slug)
      .then((reviews) => {
        setLoading(false)
        setFilteredReviews(reviews)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }, [slug])

  if (loading) {
    return <p>Loading...</p>
  }

  if (err) {
    return <ErrorPage err={err} />
  }

  return (
    <>
      <SortReviews />
      <div className="Reviews">
        {filteredReviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />
        })}
      </div>
    </>
  )
}

export default SingleCategory

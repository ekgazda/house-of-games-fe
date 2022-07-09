import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { getReviewById } from '../utils/api'
import moment from 'moment'
import Comments from './Comments'
import Voter from './Voter'
import ErrorPage from './ErrorPage'

const SingleReview = () => {
  const { id } = useParams()
  const [review, setReview] = useState([])
  const { currentUser } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    getReviewById(id)
      .then((review) => {
        setLoading(false)
        setReview(review)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }, [id])

  if (loading) return <p>Loading...</p>
  if (err) return <ErrorPage err={err} />
  if (!currentUser) return <Navigate to={'/home'} replace />

  return (
    <>
      <div className="SingleReview">
        <p>
          <b id="reviewTitle">{review.title}</b>
        </p>
        <p>
          <i>DESIGNER:</i> {review.designer}
        </p>
        <p>
          <i>CATEGORY:</i> {review.category}
        </p>
        <img src={review.review_img_url} alt="Review" className="ReviewImg" />
        <p>{review.review_body}</p>
        <p>
          <i>POSTED:</i> {moment(review.created_at).format('YYYY-MM-DD HH:mm')}
        </p>
        <p>
          <i>AUTHOR:</i> {review.owner}
        </p>
        <p>
          <Voter
            reviewId={review.review_id}
            votes={review.votes}
            author={review.owner}
          />{' '}
        </p>
      </div>
      <Comments />
    </>
  )
}

export default SingleReview

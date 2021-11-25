import { getReviewById } from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import Nav from './Nav'
import Comments from './Comments'
import Voter from './Voter'


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
        <p>
          <b>{review.title}</b>
        </p>
        <p><i>designer:</i> {review.designer}</p>
        <p><i>category:</i> {review.category}</p>
        <img src={review.review_img_url} alt="Review" className="ReviewImg" />
        <p>{review.review_body}</p>
        <p><i>posted:</i> {moment(review.created_at).format("YYYY-MM-DD HH:mm")}</p>
        <p><i>author:</i> {review.owner}</p>
        <p><Voter reviewId={review.review_id} votes={review.votes} author={review.owner}/> {' '}
        </p>
      </div>
      <Comments />
    </>
  )
}

export default SingleReview

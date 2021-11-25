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
    }).catch(err => err.body.msg)
  }, [id])

  return (
    <>
      <Nav />
      <div className="SingleReview">
        <p>
          <b id='reviewTitle'>{review.title}</b>
        </p>
        <p><i>DESIGNER:</i> {review.designer}</p>
        <p><i>CATEGORY:</i> {review.category}</p>
        <img src={review.review_img_url} alt="Review" className="ReviewImg" />
        <p>{review.review_body}</p>
        <p><i>POSTED:</i> {moment(review.created_at).format("YYYY-MM-DD HH:mm")}</p>
        <p><i>AUTHOR:</i> {review.owner}</p>
        <p><Voter reviewId={review.review_id} votes={review.votes} author={review.owner}/> {' '}
        </p>
      </div>
      <Comments />
    </>
  )
}

export default SingleReview

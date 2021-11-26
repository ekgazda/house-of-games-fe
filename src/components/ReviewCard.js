import { Link } from 'react-router-dom'

const ReviewCard = ({
  title,
  category,
  review_img_url,
  votes,
  comment_count,
  review_id,
}) => {
  return (
    <ul className="ReviewCard">
      <li>
        <b>{title}</b>
      </li>
      <li>category: {category}</li>
      <img src={review_img_url} alt="Review" className="ReviewImg"></img>
      <li>votes: {votes}</li>
      <li>comments: {comment_count}</li>
      <Link to={`/reviews/${review_id}`} className="ReadMore">
        {' '}
        READ MORE...
      </Link>
    </ul>
  )
}

export default ReviewCard

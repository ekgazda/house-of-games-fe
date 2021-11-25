import ReviewCard from './ReviewCard'
import SortReviews from './SortReviews'

const Reviews = ({ reviews }) => {
  return (
    <>
      <SortReviews />
      <div className="Reviews">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />
        })}
      </div>
    </>
  )
}

export default Reviews

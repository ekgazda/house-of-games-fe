import Nav from './Nav'
import Categories from './Categories'
import ReviewCard from './ReviewCard'

const Reviews = ({reviews}) => {
  return (
      <>
      <Nav />
      <Categories />
      <div className='Reviews'>
      {reviews.map(review => {
        return <ReviewCard key={review.review_id} {...review} />
      })}
      </div>
      </>
  )    
}

export default Reviews

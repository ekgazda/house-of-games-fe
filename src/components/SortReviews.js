import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from './Nav'
import Categories from './Categories'
import ReviewCard from './ReviewCard'
import { getSortedReviews } from '../utils/api'

const SortReviews = () => {
  const { sortByParam, orderParam } = useParams()
  const [sortedReviews, setSortedReviews] = useState([])
  const [sortBy, setSortBy] = useState(sortByParam)
  const [order, setOrder] = useState(orderParam)

  const sortByOptions = ['created_at', 'comment_count', 'votes']

  useEffect(() => {
    getSortedReviews(sortBy, order).then((reviews) => {
      setSortedReviews(reviews)
    })
  }, [])

  const updateSortBy = (newSortBy) => {
    setSortBy(newSortBy)
    getSortedReviews(newSortBy, order).then((reviews) => {
      setSortedReviews(reviews)
    })
  }

  const updateOrder = (newOrder) => {
    setOrder(newOrder)
    getSortedReviews(sortBy, newOrder).then((reviews) => {
      setSortedReviews(reviews)
    })
  }

  return (
    <>
      <Nav />
      <Categories />
      <div className="sortBy"> Sort by:
        {sortByOptions.map(option => <Link onClick={() => updateSortBy(option)} to={`/reviews/sortby/${option}/${order}`} key={option} className={`Sort_link ${sortBy === option ? 'active' : ''}`}>{option}</Link>)} 
      </div>
      <div>
        <Link onClick={() => updateOrder("asc")} to={`/reviews/sortby/${sortBy}/asc`} className={`Order_link ${order === "asc" && 'active'}`}>asc</Link>
        <Link onClick={() => updateOrder("desc")} to={`/reviews/sortby/${sortBy}/desc`} className={`Order_link ${order === "desc" && 'active'}`}>desc</Link>
      </div>
      <div className="Reviews">
        {sortedReviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />
        })}
      </div>
    </>
  )
}

export default SortReviews

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Categories from './Categories'
import ReviewCard from './ReviewCard'
import { getSortedReviews } from '../utils/api'
import ErrorPage from './ErrorPage'

const SortReviews = () => {
  const [sortedReviews, setSortedReviews] = useState([])
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('desc')
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  const sortByOptions = ['created_at', 'comment_count', 'votes']

  useEffect(() => {
    setLoading(true)
    getSortedReviews(sortBy, order)
      .then((reviews) => {
        setLoading(false)
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }, []) // eslint-disable-line

  if (loading) {
    return <p>Loading...</p>
  }

  if (err) {
    return <ErrorPage err={err} />
  }

  const updateSortBy = (newSortBy) => {
    setLoading(true)
    setSortBy(newSortBy)
    getSortedReviews(newSortBy, order)
      .then((reviews) => {
        setLoading(false)
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }

  const updateOrder = (newOrder) => {
    setLoading(true)
    setOrder(newOrder)
    getSortedReviews(sortBy, newOrder)
      .then((reviews) => {
        setLoading(false)
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }

  return (
    <>
      <Nav />
      <Categories />
      <div className="sortBy">
        {' '}
        Sort by:
        {sortByOptions.map((option) => (
          <Link
            onClick={() => updateSortBy(option)}
            to={`/reviews/sortby/${option}/${order}`}
            key={option}
            className={`Sort_link ${sortBy === option ? 'active' : ''}`}
          >
            {option}
          </Link>
        ))}
      </div>
      <div>
        <Link
          onClick={() => updateOrder('asc')}
          to={`/reviews/sortby/${sortBy}/asc`}
          className={`Order_link ${order === 'asc' && 'active'}`}
        >
          asc
        </Link>
        <Link
          onClick={() => updateOrder('desc')}
          to={`/reviews/sortby/${sortBy}/desc`}
          className={`Order_link ${order === 'desc' && 'active'}`}
        >
          desc
        </Link>
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

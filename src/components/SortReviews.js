import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSortedReviews } from '../utils/api'
import ErrorPage from './ErrorPage'
import ReviewCard from './ReviewCard'

const SortReviews = ({ categories }) => {
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('desc')
  // eslint-disable-next-line no-unused-vars
  const [sortParams, setSortParams] = useSearchParams()
  const [sortedReviews, setSortedReviews] = useState([])
  const [err, setErr] = useState(null)

  const sortByOptions = ['created_at', 'comment_count', 'votes']

  useEffect(() => {
    getSortedReviews(category, sortBy, order)
      .then((reviews) => {
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setErr(err.response)
      })
  }, [category, sortBy, order])

  const updateCategory = (newSlug) => {
    setCategory(newSlug)
    setSortParams({
      category: newSlug,
      sortBy: sortBy,
      order: order,
    })
    getSortedReviews(newSlug, sortBy, order)
      .then((reviews) => {
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setErr(err.response)
      })
  }

  const updateSortBy = (newSortBy) => {
    setSortBy(newSortBy)
    setSortParams({
      category: category,
      sortBy: newSortBy,
      order: order,
    })
    getSortedReviews(category, newSortBy, order)
      .then((reviews) => {
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setErr(err.response)
      })
  }

  const updateOrder = (newOrder) => {
    setOrder(newOrder)
    setSortParams({
      category: category,
      sortBy: sortBy,
      order: newOrder,
    })
    getSortedReviews(category, sortBy, newOrder)
      .then((reviews) => {
        setSortedReviews(reviews)
      })
      .catch((err) => {
        setErr(err.response)
      })
  }

  if (err) return <ErrorPage err={err} />

  return (
    <>
      <div className="Sort">
        <div className="Sort_text">filter by category</div>
        <>
          {categories.map((slug) => {
            return (
              <button
                key={slug}
                onClick={() => updateCategory(slug)}
                className={`Sort_btns ${category === slug ? 'active' : ''}`}
              >
                <>{slug}</>
              </button>
            )
          })}
        </>
        <div className="Sort_text">sort by</div>
        {sortByOptions.map((option) => (
          <button
            onClick={() => updateSortBy(option)}
            key={option}
            className={`Sort_btns ${sortBy === option ? 'active' : ''}`}
          >
            {option.split('_').join(' ')}
          </button>
        ))}
        <div>
          <div className="Sort_text">order</div>
          <button
            onClick={() => updateOrder('asc')}
            className={`Sort_btns ${order === 'asc' ? 'active' : ''}`}
          >
            asc
          </button>
          <button
            onClick={() => updateOrder('desc')}
            className={`Sort_btns ${order === 'desc' ? 'active' : ''}`}
          >
            desc
          </button>
        </div>
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

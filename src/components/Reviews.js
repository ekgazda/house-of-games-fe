import { getCategories } from '../utils/api'
import { useState, useEffect } from 'react'
import ErrorPage from './ErrorPage'
import SortReviews from './SortReviews'

const Reviews = ({ reviews }) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    getCategories()
      .then((categories) => {
        setLoading(false)
        setCategories(categories.map((category) => category.slug))
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (err) return <ErrorPage err={err} />

  return <SortReviews categories={categories} reviews={reviews} />
}

export default Reviews

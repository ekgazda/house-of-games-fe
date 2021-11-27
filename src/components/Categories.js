import { getCategories } from '../utils/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    getCategories()
      .then((categories) => {
        setLoading(false)
        setCategories(categories)
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response)
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (err) {
    return <ErrorPage err={err} />
  }

  return (
    <div className="Categories">
      <>Filter by category:</>
      <>
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              to={`/reviews/categories/${category.slug}`}
              className="Categories_link"
            >
              <>{category.slug}</>
            </Link>
          )
        })}
      </>
    </div>
  )
}

export default Categories

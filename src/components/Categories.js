import { getCategories } from '../utils/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <div className="Categories">
      <p>Filter by category:</p>
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

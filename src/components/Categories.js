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
      <h4>Filter by category:</h4>
      <ul>
        {categories.map(category => {
          return (
            <span key={category.slug}>
              <Link to={`/reviews/categories/${category.slug}`} className='Categories_link'>
                <h5>{category.slug}</h5>
              </Link>
            </span>
            )})}
      </ul>
    </div>  
  )
}

export default Categories





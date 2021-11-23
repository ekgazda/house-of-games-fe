import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to='/home' className='Nav_link'>HOME </Link>
      <Link to='/my-account' className='Nav_link'>MY ACCOUNT</Link>
      <Link to='/reviews' className='Nav_link'>REVIEWS</Link>
    </nav>
  )
}

export default Nav
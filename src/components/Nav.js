import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/user'


const Nav = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <nav className="Nav">
      <Link to='/home' className='Nav_link'>HOME </Link>
      <Link to='/my-account' className='Nav_link'>MY ACCOUNT</Link>
      <Link to='/reviews' className='Nav_link'>REVIEWS</Link>
    </nav>
  )
}

export default Nav
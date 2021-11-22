import { useContext } from 'react'
import { UserContext } from '../contexts/user'
import Nav from './Nav'

const UserProfile = () => {
  const { currentUser } = useContext(UserContext)
  
  return (
    <><Nav />
    <h2>Hello {currentUser}!</h2></>
  )
}

export default UserProfile
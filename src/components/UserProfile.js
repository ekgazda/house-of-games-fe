import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Nav from './Nav'

const UserProfile = () => {
  const { currentUser } = useContext(UserContext)
  
  return (
    <><Nav />
    <h2>Hello {currentUser}!</h2></>
  )
}

export default UserProfile
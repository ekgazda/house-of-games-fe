import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { getUserByUserName } from '../utils/api'
import Nav from './Nav'


const UserProfile = () => {
  const { currentUser } = useContext(UserContext)
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    getUserByUserName(currentUser).then((user) => {
      setUserDetails(user)
    })
  }, [currentUser])
  
  return (
    <><Nav />
      <h3>Hello {userDetails.name}!</h3>
      <img src={userDetails.avatar_url} alt='Avatar' className='Avatar'></img>
    </>
  )
}

export default UserProfile
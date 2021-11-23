import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { getUsers } from '../utils/api'

const Home = () => {
  const [users, setUsers] = useState([])
  const [redir, setRedir] = useState(false)
  const { setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users)
    })
  }, [])

  const changeUser = (event) => setCurrentUser(event.target.value)
  const goToProfile = () => setRedir(true)

  return (
    <>
      <h3>Please select a user</h3>
      <select onChange={changeUser} name="selectUser" id="selectUser">
        <option selected value="select user" disabled>select user</option>
        {users.map((user) => {
          return <option value={user.username}>{user.username}</option>
        })}
      </select>
      
      { <button onClick={goToProfile}>Enter</button>}
      {redir && <Navigate to={'/my-account'} replace />}
    </>
  )
}

export default Home

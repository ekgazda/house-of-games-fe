import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { getUsers } from '../utils/api'

const Home = () => {
  const [users, setUsers] = useState([])
  const [redir, setRedir] = useState(false)
  const [selectUser, setSelectUser] = useState(false)
  const { setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users)
    })
  }, [])

  const handleChange = (event) => {
    setCurrentUser(event.target.value)
    setSelectUser(true)
  }

  const goToProfile = () => setRedir(true)

  return (
    <>
      <h3>Please select a user to enter</h3>
      <select
        onChange={handleChange}
        id="selectUser"
        defaultValue={'defaultUser'}
      >
        <option key="defaultUser" value="defaultUser" disabled>
          users:
        </option>
        {users.map((user) => {
          return (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          )
        })}
      </select>
      {selectUser && <button onClick={goToProfile}>Enter</button>}
      {redir && <Navigate to={'/my-account'} replace />}
    </>
  )
}

export default Home

import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { getUsers } from '../utils/api'

const Home = () => {
  const [users, setUsers] = useState([])
  const [redir, setRedir] = useState(false)
  const { setCurrentUser } = useContext(UserContext)
  const [selectUser, setSelectUser] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getUsers().then((users) => {
      setUsers(users)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  const handleChange = (event) => {
    setCurrentUser(event.target.value)
    setSelectUser(true)
  }

  const goToProfile = () => setRedir(true)

  return (
    <main className='Home'>
      <h3>Please select a user to enter</h3>
      <select
        onChange={handleChange}
        className='UserSelector'
        defaultValue={'defaultUser'}
      >
        <option key="defaultUser" value="defaultUser" disabled>
          USERS
        </option>
        {users.map((user) => {
          return (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          )
        })}
      </select>
      {selectUser && <button onClick={goToProfile}>Log in</button>}
      {redir && <Navigate to={'/my-account'} replace />}
    </main>
  )
}

export default Home

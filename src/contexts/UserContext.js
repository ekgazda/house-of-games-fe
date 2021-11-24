import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('user')
    setCurrentUser(user)
  }, [setCurrentUser])

  const updateCurrentUser = (user) => {
    localStorage.setItem('user', user);
    setCurrentUser(user)
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser: updateCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}
import axios from 'axios'

const gamesApi = axios.create({
  baseURL: `https://eg-house-of-games.herokuapp.com/api`
})

export const getUsers = () => {
  return gamesApi.get(`/users`).then(res => res.data.users)}

export const getUserByUserName = (username) => {
  return gamesApi.get(`/users/${username}`).then(res => res.data.user)}
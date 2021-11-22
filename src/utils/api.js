import axios from 'axios'

const gamesApi = axios.create({
  baseURL: `https://eg-house-of-games.herokuapp.com/api`
})

export const getUsers = () => {
  return gamesApi.get(`/users`).then(res => res.data.users)}

export const getUserByName = (name) => {
  return gamesApi.get(`/users/${name}`).then(res => res.data.user)}
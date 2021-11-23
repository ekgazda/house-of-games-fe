import axios from 'axios'

const gamesApi = axios.create({
  baseURL: `https://eg-house-of-games.herokuapp.com/api`
})

export const getUsers = () => {
  return gamesApi.get(`/users`).then(res => res.data.users)}

export const getUserByUserName = (username) => {
  return gamesApi.get(`/users/${username}`).then(res => res.data.user)}

export const getReviews = () => {
  return gamesApi.get(`/reviews`).then(res => res.data.reviews)}

export const getCategories = () => {
  return gamesApi.get(`/categories`).then(res => res.data.categories)
}

export const getReviewByCategory = (slug) => {
  return gamesApi.get(`/reviews?category=${slug}`).then(res => res.data.reviews)
}
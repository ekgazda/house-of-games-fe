import axios from 'axios'

const gamesApi = axios.create({
  baseURL: `https://eg-house-of-games.herokuapp.com/api`
})

export const getUsers = () => gamesApi.get(`/users`).then(res => res.data.users)

export const getUserByUserName = (username) => gamesApi.get(`/users/${username}`).then(res => res.data.user)

export const getReviews = () => gamesApi.get(`/reviews`).then(res => res.data.reviews)

export const getReviewById = (id) => gamesApi.get(`/reviews/${id}`).then(res => res.data.review)

export const getCategories = () => gamesApi.get(`/categories`).then(res => res.data.categories)

export const getReviewByCategory = (slug) => gamesApi.get(`/reviews?category=${slug}`).then(res => res.data.reviews)


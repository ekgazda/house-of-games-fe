import axios from 'axios'

const gamesApi = axios.create({
  baseURL: `https://eg-house-of-games.herokuapp.com/api`,
})

export const getUsers = () =>
  gamesApi.get(`/users`).then((res) => res.data.users).catch(err => err)

export const getUserByUserName = (username) =>
  gamesApi.get(`/users/${username}`).then((res) => res.data.user).catch(err => err)

export const getReviews = () =>
  gamesApi.get(`/reviews`).then((res) => res.data.reviews).catch(err => err)

export const getReviewById = (id) =>
  gamesApi.get(`/reviews/${id}`).then((res) => res.data.review)

export const updateVotesOnReviewById = (id, vote) =>
  gamesApi
    .patch(`/reviews/${id}`, { inc_votes: vote })
    .then((res) => res.data.review).catch(err => err)

export const getCategories = () =>
  gamesApi.get(`/categories`).then((res) => res.data.categories).catch(err => err)

export const getReviewByCategory = (slug) =>
  gamesApi.get(`/reviews?category=${slug}`).then((res) => res.data.reviews).catch(err => err)

export const getSortedReviews = (sortBy, order) =>
  gamesApi
    .get(`/reviews?sort_by=${sortBy}&order=${order}`)
    .then((res) => res.data.reviews).catch(err => err)

export const getCommentsByReviewId = (id) =>
  gamesApi.get(`/reviews/${id}/comments`).then((res) => res.data.comments).catch(err => err)

export const postCommentToReviewById = (id, comment, user) =>
  gamesApi
    .post(`/reviews/${id}/comments`, { username: user, body: comment })
    .then((res) => res.data.comment).catch(err => err)

export const deleteCommentById = (id) =>
  gamesApi.delete(`/comments/${id}`).then((res) => res.data.comment).catch(err => err)

import React from 'react'
import Nav from './Nav'
import errPng from '../img/error.png'

const ErrorPage = ({ err }) => {
  if (err.request.status === 404) {
    return (
      <div>
        <Nav />
        <h3 id="errorPage">Oh no, {err.data.msg}... </h3>
        <img src={errPng} alt="Error" className="imgError"></img>
      </div>
    )
  }

  if (err.request.status === 400 || err.request.status === 500) {
    return (
      <div>
        <Nav />
        <h3 id="errorPage">Oh no, something went wrong... </h3>
        <img src={errPng} alt="Error" className="imgError"></img>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <h3 id="errorPage">Oh no, this page does not exist... </h3>
      <img src={errPng} alt="Error" className="imgError"></img>
    </div>
  )
}

export default ErrorPage

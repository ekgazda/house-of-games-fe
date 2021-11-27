import React from 'react'
import Nav from './Nav'
import errPng from '../img/error.png'

const BadPath = () => {

return (
    <div>
      <Nav />
      <h3 id="errorPage">Oh-no, this page does not exist... </h3>
      <img src={errPng} alt="Error" className="imgError"></img>
    </div>
  )
}

export default BadPath

import React from "react"
import Nav from './Nav'
import msg404Png from '../img/msg404.png'

const ErrorPage = () => {
    return (
        <div>
            <Nav />
            <h3 id="errorPage">Oh-oh this page does not exist... </h3>
            <img src={msg404Png} alt="404error" className="404error"></img>
        </div>
    )
}
export default ErrorPage
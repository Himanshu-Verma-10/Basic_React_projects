import React from "react"
import twitter from "../Icons/Twitter.svg"
import github from "../Icons/GitHub.svg"
import facebook from "../Icons/Facebook.svg"
import instagram from "../Icons/Instagram.svg"

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="icons">
                <img src={twitter}  alt="t-icon"></img>
                <img src={github}  alt="g-icon"></img>
                <img src={facebook}  alt="f-icon"></img>
                <img src={instagram}  alt="i-icon"></img>
            </div>
        </div>
    )
}
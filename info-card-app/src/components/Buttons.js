import React from "react"
import mail from "../Icons/Mail.svg"
import linkedin from "../Icons/linkedin.png"

export default function Buttons() {
    return (
        <div className="buttons">
            <button className="btn-mail">
                <img src={mail} alt="linkedin"></img>
                <small>Email</small>
                </button>
            <button className="btn-linkedin">
                <img src={linkedin} alt="linkedin"></img>
                <small>LinkedIn</small>
            </button>
        </div>
    )
}
import React from "react"
import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={logo} alt="logo"></img>
            <h3 className="navbar-title">My Travel Journal</h3>
        </nav>
    )
}
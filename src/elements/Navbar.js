import React from "react"
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center content-padding fixed w-full text-inherit">
            <div className="text-2xl text-[#E50914] font-bold ">CoreFlix</div>
            <div>
                <Link to ="/login" className="btn-primary">Sign In</Link>
            </div>
        </nav>
    )
}
import React, { useState, useEffect } from "react";
import Cover from "../assets/cover.svg";
import Footer from "../elements/footer.js"
import {Link} from "react-router-dom"
import axios from "axios";
export default function Login(){
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
     const[message,setMessage]=useState("")
    const handleSubmit = async(e) => {
        try {
        // prevent page from reloading
        e.preventDefault()

        let response = await axios.post("https://coreflix.vercel.app/login", {
            email: email,
            password: password
        })

        console.log(response)
        setMessage(response.data.message)
        } catch(e) {
            console.log("Error Occured while loging in the users account !")
            setMessage("Something Went Wrong!")
        }
    }

    useEffect(() => {
        if(message) {
        setTimeout(() => {
            setMessage("")
        }, 3000)
        }
    }, [message])

    return (
        <div>
        <div style={{
            background: `url("${Cover}") no-repeat`,
            backgroundSize: "Cover",
        backgroundColor: "#000000ba",
        backgroundBlendMode: "soft-light" 
        }} 
        className="grid place-items-center bg-black text-white h-[100vh]" onSubmit={handleSubmit} >
            <form className="w-full px-8 py-12 lg:max-w-[400px]">
            <h1 className="text-xl font-bold lg:text-3xl py-4 text-center">Welcome back!</h1>
                <legend className="text-center bg-[#E50914] w-max mx-auto">{message}</legend>
                <div className="py-2">
                    <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address or Phone Number" type ="email" required ></input>
                </div>
                <div className="py-2">
                    <input className ="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type = "password" required></input> 
                </div>
                <div className="py-2">
                <button type="Submit" className="btn-primary w-full text-center">
                       Login 
                </button>
                </div>
                <div className="py-2">
                    <p>New to Coreflix ? <Link to="/">Sign up Now</Link></p>
                </div>
                <div className="py-2">
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot Learn more</p>
                </div>
            </form>
        </div>
        < Footer/>
        
    </div>
        )
}
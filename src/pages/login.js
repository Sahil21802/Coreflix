import React, { useState } from "react";
import Cover from "../assets/cover.svg";
import Footer from "../elements/footer.js"
import axios from "axios";
export default function Login(){
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
     const[message,setMessage]=useState("")
    const handleSubmit = async(e) => {
        // prevent page from reloading
        e.preventDefault()

        let response = await axios.post("http://localhost:8080/login", {
            email: email,
            password: password
        })

        console.log(response)
        setMessage(response.data.message)
    }

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
                <legend>{message}</legend>
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
                    <p>New to Coreflix ? Sign up Now</p>
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
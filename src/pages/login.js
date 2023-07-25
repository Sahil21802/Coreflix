import React, { useState } from "react";
import Cover from "../assets/cover.svg";
import Footer from "../elements/footer.js"
export default function Login(){
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    return (
        <div>
        <div style={{
            background: `url("${Cover}") no-repeat`,
            backgroundSize: "Cover",
        backgroundColor: "#000000ba",
        backgroundBlendMode: "soft-light" 
        }} 
        className="grid place-items-center bg-black text-white h-[100vh]">
            <form className="w-full px-8 py-12 lg:max-w-[400px]">
                <div className="py-2">
                    <input className="input" value={email} placeholder="Email Address or Phone Number" type ="email"></input>
                </div>
                <div className="py-2">
                    <input className ="input" value={password} placeholder="Password" type = "password"></input> 
                </div>
                <div className="py-2">
                <buton type="button" className="btn-primary w-full text-center">
                       Login
                </buton>
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
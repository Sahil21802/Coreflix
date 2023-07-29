import React, { useState } from "react";
import Cover from "../assets/cover.svg";
import Footer from "../elements/footer.js"
import axios from "axios";
export default function Signup(props){
    
    const[email,setEmail]=useState(props.email || "")
    const[password,setPassword]=useState("")
     const[message,setMessage]=useState("")
    const handleSubmit = async(e) => {
        // prevent page from reloading
        e.preventDefault()

        let response = await axios.post("https://coreflix.vercel.app/signup", {
            email: email,
            password: password
        })

        console.log(response)
        setMessage(response.data.message)
    }

    return (
        <div>
        <div className="grid place-items-center bg-white h-[100vh]" onSubmit={handleSubmit} >
            <form className="w-full px-8 py-12 lg:max-w-[400px]">
                <h1 className="text-2xl font-bold lg:text-5xl py-4">Welcome back!
                    Joining Netflix is easy.</h1>
                <p>Enter your password and you'll be watching in no time.</p>
                <legend>{message}</legend>
                <div className="py-2">
                    <input className="input bg-white border-slate-500" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address or Phone Number" type ="email" required ></input>
                </div>
                <div className="py-2">
                    <input className ="input bg-white border-slate-500 " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type = "password" required></input> 
                </div>
                <div className="py-2">
                    <a href = "" className="text-cyan-600">Forgot your password?</a>
                </div>
                <div className="py-2">
                <button type="Submit" className="btn-primary w-full text-center">
                       Signup 
                </button>
                </div>
            </form>
        </div>
        < Footer/>
        
    </div>
        )
}
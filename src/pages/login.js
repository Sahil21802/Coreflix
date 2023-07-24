import React from "react";
export default function Login(){
    return (
        <div className="grid place-items-center bg-black text-white h-[100vh]">
            <form className="w-full px-8 py-12 lg:max-w-[400px]">
                <div className="py-2">
                    <input className="input" placeholder="Email Address or Phone Number" type ="email"></input>
                </div>
                <div className="py-2">
                    <input className ="input" placeholder="Password" type = "password"></input> 
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
    
        )
}
import React from "react";
export default function Login(){
    return (
        <div className="grid place-items-center h-[100vh]">
            <form>
                <div>
                    <input placeholder="Email Address or Phone Number" type ="email"></input>
                </div>
                <div>
                    <input placeholder="Password" type = "password"></input> 
                </div>
                <div>
                    <buton type="button">Login</buton>
                </div>
                <div>
                    <p>New to Coreflix ? Sign up Now</p>
                </div>
                <div>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot Learn more</p>
                </div>
            </form>
        </div>
    
        )
}
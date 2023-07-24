import React from "react";
import Cover from "../assets/cover.svg"
import Container  from "../assets/container.jpg"
import Container1 from "../assets/container 1.jpg"
import Container2 from "../assets/container 2.jpg"
import Container3 from "../assets/container 3.jpg"

export default function Home(){
    return(
        <main>
            <section style={{
                background: `url("${Cover}") no-repeat`,
                backgroundSize: "Cover",
            backgroundColor: "#000000ba",
            backgroundBlendMode: "soft-light" 
            }} className="text-slate-100 w-full py-20 px-4 grid place-items-center bg-black lg:min-h-[100vh]">
                <div>
                    <h1 className="text-3xl font-bold text-center lg:text-5xl py-4">Unlimited movies, TV shows, and more</h1>
                    <h2 className="text-sm font-bold text-center lg:text-2xl py-2">Watch anywhere. Cancel anytime.</h2>
                    <h3 className="text-sm font-bold text-center lg:text-2xl py-2">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form className="flex flex-col justify-center item-center py-4 gap-2 lg:flex-row">
                        <input className="input py-4 px-3 lg:max-w-[300px]" placeholder="Email-address" type ="email"></input>
                        <button className="btn-primary py-4 px-10 w-max" type ="button">Get Started!</button>
                    </form>
                </div>
            </section>
            <section className="section content-padding">
                <div className="flex-1 text-inherit text-center lg:text-left">
                    <h2 className="font-bold py-3 text-3xl lg:text-5xl text-center lg:text-left ">Enjoy on you TV</h2>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    
                </div>
                <div className="flex-1 grid place-items-center bg-slate-600">
                    <img src={Container} alt="container image"></img>
                </div>
            </section>
            <section className="section content-padding">
                <div className="flex-1 text-inherit text-center lg:text-left">
                    <h2 className="font-bold py-3 text-3xl lg:text-5xl text-center lg:text-left ">Watch EveryWhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    
                </div>
                <div className="flex-1">
                    <img src={Container1} alt="container1 image"></img>
                </div>
            </section>
            <section className="section content-padding">
                <div className="flex-1 text-inherit text-center lg:text-left">
                    <h2 className="font-bold py-3 text-3xl lg:text-5xl text-center lg:text-left ">Create Profile for kids</h2>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    
                </div>
                <div className="flex-1">
                    <img src={Container2} alt="container2 image"></img>
                </div>
            </section>
        </main>
    )
}
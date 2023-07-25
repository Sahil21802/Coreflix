import React from "react";
export default function Footer() {
    return(
       <footer className="content-padding footer text-slate-400 ">
        <div className="py-5 ">
        Questions? Call 000-800-919-1694
        </div>
        <div>
            <ul className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <li><a href="">FAQ</a></li>
                <li><a href="">Cookie Prefernces</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Legal Notice</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Media Center</a></li>
                <li><a href="">Speed Test</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Ways to Watch</a></li>
                <li><a href="">Help Center</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Only on Coreflix</a></li>
            </ul>
        </div>
       </footer> 
    )
}
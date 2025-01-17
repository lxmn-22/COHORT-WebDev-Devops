"use client"
import axios from "axios"
import { useState } from "react";

export default function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center gap-3">
                <div className="">
                    <h1 className="text-white text-3xl font-bold">Sign-Up Page</h1>
                </div>
                <div className="w-1/4 flex flex-col gap-5 p-3">
                    <input className="rounded px-3 py-2" type="text" placeholder="Name" onChange={e => {setUsername(e.target.value);}}/>
                    <input className="rounded px-3 py-2" type="email" placeholder="Email" onChange={e => {setEmail(e.target.value);}}/>
                    <input className="rounded px-3 py-2" type="password" placeholder="Password" onChange={e => {setPassword(e.target.value);}}/>
                    
                    <button onClick={() => {
                        console.log(username);
                        console.log(password);
                        
                        axios.post("http://localhost:3000/signup", {
                            username,
                            email,
                            password
                        })
                    }} className="bg-blue-500 text-white text-xl font-semibold rounded py-2 mt-1">Sign Up</button>
                </div>
            </div>
        </>
    )
}
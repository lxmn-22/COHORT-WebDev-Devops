import axios from "axios"

export default function Signin() {
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center gap-3">
                <div>
                    <h1 className="text-white text-3xl font-bold">Sign-In Page</h1>
                </div>
                <div className="w-1/4 flex flex-col gap-5 p-3">
                    <input className="rounded px-3 py-2" type="text" placeholder="Email" />
                    <input className="rounded px-3 py-2" type="password" placeholder="Password" />

                    <button className="bg-blue-500 text-white text-xl font-semibold rounded py-2 mt-1">Sign in</button>
                </div>
            </div>
        </>
    )
}
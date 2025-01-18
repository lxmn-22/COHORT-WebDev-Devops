"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return <SessionProvider>
    <RealHome />
  </SessionProvider>
}

function RealHome() {
  const session = useSession();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      { session.status === "authenticated" 
        ? <button onClick={() => signOut()} className="bg-red-500 text-white text-xl font-semibold rounded px-6 py-2 mt-1">Logout</button> 
        : <button onClick={() => signIn()} className="bg-blue-500 text-white text-xl font-semibold rounded px-6 py-2 mt-1">Sign-In</button>}
    </div>
  )
}
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
        <div className="">
          <h1 className="text-white text-3xl font-bold">Todo App</h1>
        </div>
        <div className="flex gap-10">
          <Link className="bg-blue-500 rounded-md px-6 py-2 text-white text-lg font-semibold" href="/signin">Sign In</Link>
          <Link className="bg-blue-500 rounded-md px-6 py-2 text-white text-lg font-semibold" href="/signup">Sign Up</Link>

          {/* 
          Bad way to do Routing in Nextjs.

          import { useRouter } from "next/navigation";
          const router = useRouter();

          <button className="bg-blue-500 rounded-md px-6 py-2 text-white text-lg font-semibold" onClick={() => {
            router.push("/signin")
          }}>Sign In
          </button>
          <button className="bg-blue-500 rounded-md px-6 py-2 text-white text-lg font-semibold" onClick={() => {
            router.push("/signup")
          }}>Sign Up
          </button> */}
        </div>
      </div>
    </>
  );
}

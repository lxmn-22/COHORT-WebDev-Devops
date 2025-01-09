import { useState } from "react"

// Example of "useState" Hook.
export default function Count() {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex flex-col items-center border-2 gap-3 p-3">
                <h1 className="flex text-3xl font-semibold text-black">Counter Component</h1>
                <p className="text-3xl font-semibold">{count}</p>
                <div className="flex gap-3">
                    <button onClick={() => setCount(count + 1)} className="bg-blue-500 rounded text-white text-sm font-bold px-3 py-1">+</button>
                    <button onClick={() => setCount(count - 1)} className="bg-blue-500 rounded text-white text-sm font-bold px-3 py-1">-</button>
                    <button onClick={() => setCount(0)} className="bg-red-500 rounded text-white text-sm px-3 py-1">Reset</button>
                </div>
            </div>
        </>
    )
}
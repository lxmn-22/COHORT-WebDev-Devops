import { useState } from "react"

// Example of "useState" Hook.
export default function Greeting() {

    const [text, setText] = useState('Hello, ');

    function handleChange(e) {
        setText(e.target.value);
    }
    
    return (
        <>
            <div className="flex flex-col gap-3 border-2 px-3 py-3 rounded">
                <h1 className="text-2xl font-bold text-black">Greeting Component</h1>
                <input className='border-2 px-2 rounded' value={text} onChange={handleChange} />
                <p className="text-xl font-medium text-orange-900">Greetings: {text}</p>
                <div className="flex gap-3 justify-center">
                    <button className="bg-blue-500 text-white rounded px-3 py-1">Save</button>
                    <button onClick={() => setText("Hello, ")} className="bg-red-500 text-white rounded px-3 py-1">Reset</button>
                </div>
            </div>
        </>
    )
}
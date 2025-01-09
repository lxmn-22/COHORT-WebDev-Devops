import { useRef } from "react"

export default function TextInput() {

    const inputRef = useRef();

    function focusOnInput() {
        inputRef.current.focus();
    }

    return (
        <>
        <div className="flex gap-3 border-2 p-3">
            <input ref={inputRef} className="border-2 px-3 rounded text-md" type="text" placeholder="Email" />
            <button onClick={focusOnInput} className="bg-blue-500 rounded text-white text-sm px-3 py-1">Subscribe</button>
        </div>
        </>
    )
}
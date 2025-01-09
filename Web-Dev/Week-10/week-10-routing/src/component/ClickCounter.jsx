import { useRef } from "react";

// Example of referencing a value with "useRef"
/* 
- This component uses "ref" to keep track of how many times the button was clicked.
- "ref" only reads and write in an event handler without re-rendering the component.
- instead if we had used "state" it re-renders the whole component every time the value changes.
*/

export default function Counter() {
    let counterRef = useRef(0);

    function handleClick() {
        counterRef.current = counterRef.current + 1;
        alert('You clicked ' + counterRef.current + ' times!');
    }

    return (
        <button onClick={handleClick} className="bg-blue-500 rounded text-white text-sm px-3 py-1 border-2">
            Click Me!
        </button>
    );
}
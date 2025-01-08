import { useRef, useState } from 'react';

// Example of referencing a value with "useRef"
/*
    # Do not read & write "ref.current" during rendering.
    # Always read & write "refs" from event handlers or effects(useEffect) instead.
*/

export default function Stopwatch() {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime != null && now != null) {
        secondsPassed = (now - startTime) / 100;
    }

    return (
        <>
            <h1 className='text-3xl font-semibold'>Stopwatch</h1>
            <h2>{secondsPassed.toFixed(2)}</h2>

            <div className='flex gap-3'>
                <button onClick={handleStart} className="bg-blue-500 rounded text-white text-sm px-3 py-1">
                    Start
                </button>

                <button onClick={handleStop} className="bg-red-500 rounded text-white text-sm px-3 py-1">
                    Stop
                </button>
            </div>
        </>
    );
}
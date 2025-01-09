import { useState } from "react";

// Example of "useState" Hook.
export default function Form() {

    const [name, setName] = useState("Virat Kohli");
    const [age, setAge]= useState(35);

    return (
        <>
            <div className="flex flex-col gap-3 border-2 p-3 mb-20">
                <div className="flex">
                    <h1 className="text-2xl font-bold">Multiple States Component</h1>
                </div>

                <div className="flex flex-col gap-3">
                    <input className="border-2 px-2" value={name} onChange={e => setName(e.target.value)} />
                    <button onClick={() => setAge(age + 1)} className="bg-blue-500 text-white rounded py-1">
                        Increase Age
                    </button>
                    <p className="text-lg font-medium">Hello, {name}. You are {age}.</p>
                </div>
            </div>
        </>
    )
}
import { useState } from "react"


export default function Checkbox() {

    const [liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }
    return (
        <>
            <div className="flex flex-col gap-3 border-2 p-3">
                <div className="flex">
                    <h1 className="text-2xl font-bold">Checkbox Component</h1>
                </div>

                <div className="flex flex-col">
                    <label className="text-green-600 font-semibold">
                        <input type="checkbox" checked={liked} onChange={handleChange} />
                        Jagermeister
                    </label>

                    <p className="text-lg font-medium">I {liked ? "love Jager" : "don't drink blood"}.</p>
                </div>
            </div>
        </>
    )
}
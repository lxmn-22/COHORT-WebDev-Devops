import axios from "axios";

export default async function User() {

    const response = await axios.get("http:/localhost:3000/api/v1/user/details");
    const data = response.data;
    
    return <>
        <div className="h-screen flex items-center justify-center gap-3">
            <div className="flex-col text-white p-4 border-2 rounded-lg">
                <h1 className="flex justify-center text-3xl font-bold text-white mb-2">User Page</h1>
                <div>
                    <p className="text-white">Name: { data.username }</p>
                </div>
                <div>
                    <p className="text-white">Email: { data.email }</p>
                </div>
            </div>
        </div>
    </>
}
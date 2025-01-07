import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div>
    Content not found!
    <button onClick={redirectUser} className="bg-blue-500 text-white ml-6 px-2 py-0.5 rounded">Home</button>
  </div>
}
import { useNavigate } from "react-router-dom";

export default function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div>
    NEET programs for Class 12th
    <button onClick={redirectUser} className="bg-blue-500 text-white ml-6 px-2 py-0.5 rounded">Back</button>
  </div>
}
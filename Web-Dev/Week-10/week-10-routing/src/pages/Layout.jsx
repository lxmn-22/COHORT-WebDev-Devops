import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return <div className="h-[100vh]">
    <Link to="/">Home</Link> | 
    <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    <div className="h-[90vh]">
      <Outlet />
    </div>
  </div>
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Class11Program from "./pages/Class11Program";
import Class12Program from "./pages/Class12Program";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      Footer | Contact Us
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Class11Program from "./pages/Class11Program";
import Class12Program from "./pages/Class12Program";
import { useRef } from "react";
import Counter from "./component/ClickCounter";
import Stopwatch from "./component/Stopwatch";
import TextInput from "./manipulatingDOM/textInput";
import ScrollImage from "./manipulatingDOM/ScrollImage";
import Count from "./usestate/Counter"
import Greeting from "./usestate/Greeting";
import Checkbox from "./usestate/Checkbox";
import Form from "./usestate/MultipleState";

function App() {
  /* 
  "useRef": Reference to a value, such that when we want to change the value, 
  the component DOES NOT RE-RENDER. */
  const inputRef = useRef();

  function focusOnInput() {
    // document.getElementById("name");
    inputRef.current.focus();
  }

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/" element={<Landing />} />
    //       <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
    //       <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
    //       <Route path="*" element={<ErrorPage />} />
    //     </Route>
    //   </Routes>
    //   Footer | Contact Us
    // </BrowserRouter>

    <div className="w-full flex flex-col items-center gap-4">
      Sign Up
      <input ref={inputRef} className="border-2 px-3 rounded text-md" type={"text"} placeholder="Name" />
      <input className="border-2 px-3 rounded text-md" type="text" placeholder="Password" />
      <button onClick={focusOnInput} className="bg-blue-500 rounded text-white text-sm px-3 py-1">Submit</button>

      {/* Example of referencing a value with "useRef" */}
      <Counter />
      <Stopwatch />

      {/* Example of manipulating the DOM with "useRef" */}
      <TextInput />
      <ScrollImage />
      <Count />
      <Greeting />
      <Checkbox />
      <Form />
    </div>
    
  )
}

export default App

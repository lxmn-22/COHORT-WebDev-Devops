import { useEffect, useRef, useState } from "react"

function App() {
  const[socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if(!socket) {
      return;
    }

    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  // this will create the websocket server, when the App() function will render for the first time.
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col items-center justify-center gap-3">
        <h1 className="text-white text-3xl font-semibold">Chat App</h1>
        <div className="w-full flex justify-center gap-3">
          <input ref={inputRef} className="w-1/6 h-8 rounded px-3" type="text" placeholder="Message..." />
          <button onClick={sendMessage} className="text-white font-semibold bg-blue-500 rounded px-6 py-1">Send</button>
        </div>
      </div>
    </>
  )
}

export default App

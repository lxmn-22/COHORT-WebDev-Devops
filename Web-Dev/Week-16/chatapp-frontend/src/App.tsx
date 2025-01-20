
/*
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
*/

import { useEffect, useRef, useState } from "react"

function App() {
  const[messages, setMessages] = useState(["Hello, Chat.", "I'm Laxman."]);
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");

    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
    // cleanup function.
    return () => {
      ws.close()
    }
  }, []);

  return (
    <div className="bg-black w-screen h-screen">
      <div className="flex justify-center p-3">
        <h1 className="flex justify-center text-white text-3xl font-bold ">Chat App</h1>
      </div>
        <div className="h-[85vh] p-3">
          {messages.map(message => <div className="mt-3">
            <span className="bg-green-600 text-white font-semibold text-lg px-4 py-1 rounded-3xl">
              {message}
            </span>
          </div>)}
        </div>
        <div className="w-full flex py-1 gap-1 px-3">
          <input id="message" className="w-full flex-1 rounded-3xl px-5 text-lg font-semibold" type="text" />
          <button onClick={() => {
            const message = document.getElementById("message")?.value;
            wsRef.current.send(JSON.stringify({
              type: "chat",
              payload: {
                message: message
              }
            }))
          }} className="bg-blue-600 text-white text-lg font-semibold px-9 py-1 rounded-3xl">
            Send
          </button>
        </div>
    </div>
  )
}

export default App

import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

/*
// NOTE: This code is for joining a wss, multiple users can join it, but cannot interact with each other.
let userCount = 0;
let allSockets: WebSocket[] = [];   // [socket1, socket2, socket3, ...]

// event handler: whenever there is a new connection, this function will handle it.
wss.on("connection", function(socket) {
    // whoever joins the wss placed into "allSockets" variable.
    allSockets.push(socket);

    userCount += 1;
    console.log(`User-${userCount} Connected`);
    
    socket.on("message", (message) => {
        console.log(`Message received: ${message.toString()}`);

        // message broadcasting to all the users, "allSockets".
        // for(let i = 0; i < allSockets.length; i++) {
        //     const s = allSockets[i];
        //     s.send(message.toString() + ": sent from the server.");
        // }
        allSockets.forEach(s => {
            s.send(message.toString() + ": sent from the server.");
        })
    })

    // updates the "allSocket" arr, if the user leaves the wss.
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x != socket);
    })
})
*/

// NOTE: join the rooms, interact with the users(sockets), according to their room id's.
interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

// creating the wss.
wss.on("connection", (socket) => {
    console.log("Connected to websocketserver.");

    // when users send messages.
    socket.on("message", (message) => {     // "message" is a string argument, can't take json object.
        // @ts-ignore
        const parsedMessage = JSON.parse(message);  // changing string to object.
        if(parsedMessage.type == "join") {          // "join" is "type" into jsObject sent by the user.
            console.log(`User joined ${parsedMessage.payload.roomId} room.`);
            
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId  // fetching "roomId" from jsObject sent by the user.
            })
        }

        if(parsedMessage.type == "chat") {
            console.log("User wants to chat...");
            
            // checks userRoom from allSockets array
            // const currentUserRoom = allSockets.find((x) => x.socket == socket);

            let currentUserRoom = null;
            for(let i = 0; i < allSockets.length; i++) {
                if(allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }

            for(let i = 0; i < allSockets.length; i++) {
                if(allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    }) 
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
// creating the wss.
wss.on("connection", (socket) => {
    console.log("Connected to websocketserver.");
    // when users send messages.
    socket.on("message", (message) => {
        // @ts-ignore
        const parsedMessage = JSON.parse(message); // changing string to object.
        if (parsedMessage.type == "join") { // "join" is "type" into jsObject sent by the user.
            console.log(`User joined ${parsedMessage.payload.roomId} room.`);
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId // fetching "roomId" from jsObject sent by the user.
            });
        }
        if (parsedMessage.type == "chat") {
            console.log("User wants to chat...");
            // checks userRoom from allSockets array
            // const currentUserRoom = allSockets.find((x) => x.socket == socket);
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});

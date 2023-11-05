const webSocket = require("ws");
const path = require("node:path");
const express = require("express");
const app = express();
app.use("/",express.static(path.join(__dirname,"../build/")));

const server = app.listen(3000);

const wss  = new webSocket.Server({
    server:server
});

wss.on("connection",function (ws,req){
    console.log("connection has been established ");
    console.log(req.url);
    ws.on("message",function(data){
        ws.send(data.toString());
    })
})


const express = require('express');
const socket = require("socket.io");
//const res = require('express/lib/response');
const app = express();
const port = 3000;
const server = app.listen(port, ()=> {
    console.log("posssssssloucham port 3000")
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (stream) => {
    console.log("Klient se pripojil " + stream.id);

    stream.on('chat', (data) =>{
        console.log(data);
        io.emit("chat", data); //io misto stream znamena ze to dostanou vsichni ucastnici, coz chceme!!!


    })


    stream.on("disconnect", () => console.log("Klient " + stream.id + " se odpojil"));
})
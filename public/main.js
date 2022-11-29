const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message');
const nickname = document.getElementById('nickname');
const btn = document.getElementById("send");
const output = document.getElementById("output");

btn.addEventListener('click', () => {
    console.log("Kliknuto");
    socket.emit("chat", {
        message: message.value, 
        nickname: nickname.value,
    });


    
});

socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.nickname}:</strong> ${data.message}</p>`
});
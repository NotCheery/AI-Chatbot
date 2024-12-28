// Client Side of Browser

// Check to see if socket is connected properly
const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});


// instantiate socket.io
// const socket = io();

// Capture the DOM reference for button UI
document.querySelector('#send').addEventListener('click', () => {
    const text = document.querySelector('#userInput').value;
    if (text) {
        socket.emit('chat message', text); //send message to server
        document.querySelector('#userInput').value = ''; //clear input
    }
});

// Listen for bot response from server
socket.on('bot reply', function(replyText) {
    const responseDiv = document.querySelector('#response');
    responseDiv.innerHTML += `<p><strong>Bot:</strong>${replyText}</p>`
});



  
  
//File to instantiate Express and listen to the server
const express = require('express');
const { Wit } = require('node-wit');
const socketIO = require('socket.io');
const app = express();

// Express Setup
app.use(express.static(__dirname + '/views')); //html
app.use(express.static(__dirname + '/public')); //js, css, images

// Wit.ai Client Setup
require('dotenv').config();

const apiKey = process.env.WIT_API_KEY;
const client = new Wit({accessToken: apiKey});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Server website
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    
    socket.on('chat message', (text) => {
        client.message(text, {})  
            .then((response) => {
                console.log(response); //Check response in terminal
                let intent = response.traits?.['wit$greetings']?.[0]?.value;
                let aiText = intent ? "Hello! How can I help you?": "I did not understand that.";
                socket.emit('bot reply', aiText);
            })
            .catch((err) => {
                console.error('Wit.ai error: ', err);
                socket.emit('bot reply', 'Oops, something went wrong.');
            });
    });
});

// Run and see in browser
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

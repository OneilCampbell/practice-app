//allows access to the express module and all functions and methods exported from it
let express = require('express');
//creates an instance of an express application and stores it in the app variable
let app = express();

//allows access to http module
let http = require('http');
//creates a server and passes in the instance of express
//express will now serve as the handler for requests to the server
let server = http.createServer(app);

let io = require('socket.io').listen(server);
// //bind http server with socket.io 
// let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    // fires whenever the 'new-message' event is triggered
    //event is triggered by sendMessage function in chat.service.ts file
    socket.on('new-message', (message) => {
        //sends an event to everyone connected to the server and passes along the message
        io.emit('new-message', message);
    })
})

server.listen(port, () => {
    console.log(`started on port: ${port}`)
})
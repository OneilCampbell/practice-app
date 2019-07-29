//allows access to the express module and all functions and methods exported from it
let express = require('express');
//creates an instance of an express application and stores it in the app variable
let app = express();

//allows access to http module
let http = require('http');
//creates a server and passes in the instance of express
//express will now serve as the handler for requests to the server
let server = http.Server(app);

let socketIO = require('socket.io');
//bind http server with socket.io 
let io = socketIO(server);

const port = process.env.PORT || 3000;


//event that gets fired when a new connection is established
// @param event --- the event being fired (in this case 'connection')
// @param listener --- a listener that is executed once the event is fired, takes only one parameter of type Socket
//
io.on('connection', (socket) => {
    console.log('user connected');
})




server.listen(port, () => {
    console.log(`started on port: ${port}`)
})
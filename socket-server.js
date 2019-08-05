/**---------------------------------------------------------------
 *           FILE IS ONLY RUN IN DEVELOPMENT MODE
 *   the actual server used in production is deployed separately
 * ---------------------------------------------------------------
 */


//allows access to the express module and all functions and methods exported from it
let express = require('express');
//creates an instance of an express application and stores it in the app variable
let app = express();

//allows access to https module
let https = require('https');
//creates a server and passes in the instance of express
//express will now serve as the handler for requests to the server
let server = https.createServer(app);

//allows acces to socket.io module
let socketIO = require('socket.io');
//bind http server with socket.io 
let io = socketIO(server);

const port = process.env.PORT || 3000;

//event that gets fired when a new connection is established
// @param event --- the event being fired (in this case 'connection')
// @param listener --- another listener that is executed once the specified event is fired
//
io.on('connection', (socket) => {
    console.log('user connected');

    // fires whenever the 'new-message' event is triggered
    //event is triggered by sendMessage function in chat.service.ts file
    socket.on('new-message', (message) => {
        //sends an event to everyone connected to the server and passes along the message
        io.emit('new-message', message);
    })
})

//server listens for changes or events on the provided port
//those events are processed through the above function once the connection has been established
//connect to the server via the socket.io-client
//check './src/app/services/chat/chat.service.ts' for establishment of connection
server.listen(port, () => {
    console.log(`started on port: ${port}`)
})
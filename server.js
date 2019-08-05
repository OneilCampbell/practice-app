//allows access to the express module and all functions and methods exported from it
let express = require('express');
//creates an instance of an express application and stores it in the app variable
let app = express();
//use port environment variable provided by heroku when in production or localhost:8080 when in development
const port = process.env.PORT || 8080;


//**************************
//      For Production
//**************************

// tells express where to serve files from in production
// 'dist/' gets created after 'ng build' command is executed
app.use(express.static(__dirname + '/dist/olex-chat-app'));

// all routes get funneled through/redirected to angular's top level index.html file
// if present, angular routing takes over after
app.get('/*', function(req,res) {
    
    //creates path to index.html in build folder and sends the matching file at the location
    //so that it can be displayed
    res.sendFile(path.join(__dirname, '/dist/olex-chat-app/index.html'));

});

//express app listens for changes and requests on the provided port then acts accordingly
app.listen(port, () => {
    console.log(`app up and running on port: ${port}`);
});

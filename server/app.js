// Import external dependencies
const express = require('express');

// Set port number
const port = 3000;

// Create Express app
const app = express();

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// Start server
app.listen(port, () =>{
    console.log("App listening on port: ", port);
});

'use strict';
var express = require('express');           // Express
var bodyParser = require('body-parser');    // Parse request body

// Application Port (Default = 8080)
const PORT = process.env.PORT || 8080;

// Initialize express with body parser middleware
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Method to handle a request on /
app.get('/', function (req, res) {
    res.send('Nothing to see here.');
});

// Method to handle a post request from Chatfuel
app.post('/chatfuel', function (req, res) {

    // Get post data from request body
    var data = req.body;
    console.log(data);

    // Provide a response back to Chatfuel
    res.json({
        "messages": [
            {
                "attachment": {
                    "type": "image",
                    "payload": {
                        "url": "https://dummyimage.com/500x500/000000/fff.jpg"
                    }
                }
            }
        ]
    });
});

// Begin Application
app.listen(PORT, function() {
    console.log('Application listening on port ' + PORT);
});

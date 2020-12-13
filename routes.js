const express = require("express")
const routes = express.Router()

// http://expressjs.com/en/starter/basic-routing.html
routes.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
routes.get("/api/hello", function(req, res) {
    res.json({ greeting: 'hello API' });
});

routes.get('/api/timestamp/', (req, res) => {
    const date = new Date()

    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
})

routes.get('/api/timestamp/:date', (req, res) => {
    const dateString = req.params.date
    
    let date = isNaN(dateString) ? new Date(dateString) : new Date(parseInt(dateString)) 

    if (date.toString() == 'Invalid Date') {
        res.json({ error: date.toString() })
    }
    else {
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        })
    }

})

module.exports = routes
var express = require('express');
var http = require('http');


var app = express();

app.use("/test", (req, res) => {
    res.send("lol");
})

http.createServer(app).listen(80);
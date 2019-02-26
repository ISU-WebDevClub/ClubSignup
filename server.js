const express = require('express');
const app = express();
const http = require('http');
const ip = require('ip');
const path = require('path');

const server = http.createServer(app);
const PORT = 8080;

app.use(express.static('/public'));
app.set('view engine', 'vash');

app.on("/", function(req,res) {
    res.render("index");
    // res.sendFile(path.join(__dirname,"/index.html"));
});

// app.on("/index", function(req,res) {
//     res.sendFile(path.join(__dirname,"/index.html"));
// });

app.use(function(reg,res){
    res.send("404");
})

//start the server
server.listen(PORT, function () {
    console.log(`Club signup running at ${ip.address()}:${PORT}`);
});
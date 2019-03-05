const express = require('express');
const app = express();
const http = require('http');
const ip = require('ip');

const server = http.createServer(app);
const PORT = 8080;

app.use(express.static('/public'));
app.set('view engine', 'vash');

app.get('/index',  (req, res) => {
    res.render("index"); 
});

app.get('/',  (req, res) => {
    res.render("index"); 
});

app.get('/list', (req,res) => {
    res.render("list")
});

app.use(function(req,res){
    res.send("404");
})

//start the server
server.listen(PORT, function () {
    console.log(`Club signup running at ${ip.address()}:${PORT}`);
});
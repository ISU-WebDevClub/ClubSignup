const express = require("express");
const app = express();
const http = require("http");
const ip = require("ip");

const PORT = 8080;

app.set("view engine", "vash");
app.use(express.static("public"));

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/list", (req, res) => {
    res.render("list");
});

app.get("/edit:id?", (req, res) => {
    res.render("edit");
});

app.use(function(req, res) {
    res.send("404");
});

const server = http.createServer(app);

//start the server
server.listen(PORT, function() {
    console.log(`Club signup running at ${ip.address()}:${PORT}`);
});

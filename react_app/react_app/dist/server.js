var express = require("express");
var server = express();
server.use("/", express.static(__dirname+'/'));
server.listen(8080);
console.log("Server Prod started at port 8080");
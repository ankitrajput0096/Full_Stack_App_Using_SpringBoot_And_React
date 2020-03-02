var express = require("express");
var server = express();
server.use("/", express.static(__dirname+'/'));
server.listen(9100);
console.log("Server Prod started at port 9100");

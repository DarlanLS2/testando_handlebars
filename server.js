var express = require("express");
var {engine} = require("express-handlebars");

const server = express();

server.engine("handlebars", engine());
server.set("view engine", "handlebars")

server.get("/", (req, res) => {
  res.render("home");
});



server.listen(3000, () => {
  console.log("server na porta: 3000" )
  console.log("server: ok")
})
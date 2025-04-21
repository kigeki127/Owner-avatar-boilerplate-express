require('dotenv').config();
let express = require('express');
let app = express();

//console.log("Hello World");

//app.get("/", function(req, res) {
//  res.send("Hello Express");
//});

//app.get("/", function(req, res) {
//  res.sendFile(__dirname + "/views/index.html");
//});

//app.use("/public", express.static(__dirname + "/public"));

//app.get("/json", (req, res) => {
//  res.json({
//    message: "Hello json"
//  });
//});

app.get("/json", (req, res) => {
	var response = "Hello json";
if (process.env.MESSAGE_STYLE === "uppercase") {
	response="Hello json".toUpperCase();
	res.json({"message": response});
} else {
  res.json({"message": response});
}
});















 module.exports = app;

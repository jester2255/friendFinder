//---------------Dependancies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 2900;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname,"app/public/home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname,"app/public/survey.html"));
});

app.listen(process.env.PORT || PORT, function(){
	console.log("App is listening on PORT " + PORT)
})
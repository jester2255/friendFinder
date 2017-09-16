
var path = require("path")
var friends = require("../data/friends.js")

module.exports = function(app){

 app.get("/api/friends", function(req, res){
 	res.json(friends)
 });

 app.post("/api/friends", function(req, res){
 	var userInput = req.body;
 	var userAnswers = userInput.scores;

 	var nameMatch = '';
 	var imgMach = '';
 	var theDif = 10000

 	for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));

			//Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userAnswers.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userAnswers[j]);
			}
			console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < theDif) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				theDif = diff;
				nameMatch = friends[i].name;
				imgMach = friends[i].photo;
			}
		}

		friends.push(userInput);
		res.json({status: "OK", nameMatch: nameMatch, imgMach: imgMach});
 });

};
var friendsData = require("../data/friends");

module.exports = function(app){
    //A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
        app.get("/api/friends", function(req, res) {
            res.json(friendsData);
        });

    //A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        app.post("/api/friends", function(req, res) {
          //find best match
            let matchScoreArray = [];
            for (var i = 0; i < friendsData.length; i++){
                let diffArray = [];
                for (var j = 0; j < friendsData[i].scores.length; j++){
                    let diff = Math.abs(parseInt(req.body.scores[j])-parseInt(friendsData[i].scores[j]));
                    diffArray.push(diff);
                }
                let diffScore = diffArray.reduce(function(acc,val){ return acc + val;});
                matchScoreArray.push(diffScore);
            }
            //console.log(matchScoreArray)
            var index = 0;
            var lowestValue = matchScoreArray[0];
            for (var k = 1; k < matchScoreArray.length; k++) {
                if (matchScoreArray[k] < lowestValue) {
                    lowestValue = matchScoreArray[k];
                    index = k;
                }
            }
            //console.log(friendsData[index].name)
            friendsData.push(req.body);
            var matchName = friendsData[index].name;
            var matchImage=friendsData[index].photo;

            res.json({matchName, matchImage}); 
        });
};

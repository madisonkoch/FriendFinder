var friendsData = require("../data/friends");

module.exports = function(app){
    //A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
        app.get("/api/friends", function(req, res) {
            res.json(friendsData);
        });

    //A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        app.post("/api/friends", function(req, res) {
            friendsData.push(req.body);
            
            var matchName = "";
            var matchImage="";
//HELP          //function that finds best match
                //go through each friend in friends.js and calculate difference score
                //find person with lowest score (may be more than 1)
                //assign match's name and image to var's

            res.json({name:matchName, image:matchImage}); 
        });
};

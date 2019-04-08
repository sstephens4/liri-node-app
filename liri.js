// npm packages
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");


// user input variables
var command = process.argv[2];
var term = process.argv.slice(3).join(" ");


// switch case so it can take in the commands
    switch (command) {
        case "concert-this":
            console.log("...Searching for " + term + "...");
            bandsData();
            ;
            break;

        case "spotify-this-song":
            console.log("...Searching for results on " + term + "...");
            break;

        case "movie-this":
            console.log("...Searching for results on " + term + "...");
            break;

        case "do-what-it-says":
            console.log("Do it thang.");
            break;

        default:
            console.log("{Please enter a command: concert-this, spotify-this-song, movie-this, do-what-it-says}");
    }

    
    function bandsData(artist){

        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("Venue Name: " + response.venue.name);
  })
}

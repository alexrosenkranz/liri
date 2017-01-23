var key = require('./keys.js');
var twitter = require('twitter');

var command = process.argv[2];

var params = {screen_name: 'alexrosenkranz', count: 20};

function tweets() {
  key.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
  if(error) throw error;
  // console.log(tweets);  // The favorites. 
  for (var i = 0; i < 20; i++) {
    console.log(tweets[i].created_at + '\n' + tweets[i].text + '\n');
  }
});
  
}

function spotify() {

}

function movie() {

}

function says() {

}


switch (command) {
  case "my-tweets":
    tweets();
    break;
  case "spotify-this-song":
    spotify();
    break;
  case "movie-this":
    movie();
    break;
  case "do-what-it-says":
    says();
    break;
}
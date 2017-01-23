var key = require('./keys.js');

var command = process.argv[2];
var searchName = process.argv[3]


function tweets() {
  var params = {screen_name: 'alexrosenkranz', count: 20};

  key.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(error) throw error;
    // console.log(tweets);  // The favorites. 
    for (var i = 0; i < 20; i++) {
      console.log(tweets[i].created_at + '\n' + tweets[i].text + '\n');
    }
  });
  
}

function spotify() {
  var spotify = require('spotify');
  
  if (!searchName) {
    searchName = 'Ace Of Base The Sign'
  }

  spotify.search({ type: 'track', query: searchName }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      console.log('Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Name: ' + data.tracks.items[0].name + '\nFrom Album: ' + data.tracks.items[0].album.name + '\nPreview: ' + data.tracks.items[0].preview_url + '\n');
    });


}

function movie() {
  var request = require('request');

  if(!searchName) {
    searchName = "Mr. Nobody";
  }
  request.get('http://www.omdbapi.com/?r=json&tomatoes=true&t=' + searchName, function (error, response, movie) {
    if (!error && response.statusCode == 200) {
      movie = JSON.parse(movie);
      console.log(movie.Title + '\nYear: ' + movie.Year + '\nIMDB Rating: ' + movie.imdbRating + '\nCountry: ' + movie.Country + '\nLanguage: ' + movie.Language + '\nPlot: ' + movie.Plot + '\nActors: ' + movie.Actors + '\nRotten Tomatoes Rating: ' + movie.tomatoUserRating + '\nRotten Tomatoes URL: ' + movie.tomatoURL);
    }
  })
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
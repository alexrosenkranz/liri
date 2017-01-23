console.log('this is loaded');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'U08dTuwbIKu7bhxDDTLsQDJUU',
  consumer_secret: 'LntZFEbdrRNok1WQxwFjvzyguUito8CoxrRCb98hC7E0bWuQrZ',
  access_token_key: '10830472-unhXUWtMw1aG2VueGUncQPvWh4sI47790elp5hJ1t',
  access_token_secret: 'P4tN3RpLTLhhRCrv4j7K9F4uuRhBWHxjTlU8IiglPDkji',
});

exports.twitterKeys = client
var Twit        = require('twit');
var config      = require('./config');
// Twitter shit
var T = new Twit(config.twit);

exports.tweets =  function getTweets (number, filter, cb){
  
  var stream = T.stream('statuses/filter', { track: filter, language: 'en'});
  var allTweets = [];
  var count = 0;

  stream.on('tweet', function (tweet) {
      allTweets.push(tweet.text);
      count += 1;
      if (count === number){
        stream.stop();
        return cb(allTweets);
      }
  })
  
}

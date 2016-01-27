const Twitter = require('twitter');
const config = require('../../config');
const client = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret
});

class TwitterService {
    constructor() {
    }
    
    // rest methods
 
    //  promise implementation
    // var searchPromise = client.get('favorites/list');
    // searchPromise.then(function(tweets, response) {
    //      console.log(tweets);  // The favorites. 
    //     console.log(response);  // Raw response object. 
    //     cb(tweets);
    // }, function(err) {
    //     console.log(err);
    // }) 
    
    
    // streaming methods
    streamHashtag(hashtag) {
        // twitter api is callback based - wrapping in a promise
        return new Promise( function(resolve,reject){
            client.stream('statuses/filter', {track: hashtag}, function(stream) {
                stream.on('data', function(tweet) {
                    
                    console.log(tweet.text);
                    resolve(tweet.text);
                });
            
                stream.on('error', function(error) {
                    reject(error);
                });
            });
        });
    }
}

module.exports.TwitterService = TwitterService;
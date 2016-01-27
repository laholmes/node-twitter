const Twitter = require('twitter');
const config = require('../../config');
const client = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret
});

// a wrapper for the twitter api calls library, 
// npm twitter is callback based - calls are wrapped in promises
class TwitterService {
    constructor() {
    }
   
    // REST    
    getHashtag(hashtag) {
        return new Promise(function(resolve, reject) {
            client.get('search/tweets', {q: hashtag}, (error, tweets, response) => {
                if(error) {
                    reject(error);
                } else {
                    console.log(tweets);  // The favorites. 
                    console.log(response);  // Raw response object. 
                    resolve(tweets);
                }
            })
        });
    }
       
    // streaming
    streamHashtag(hashtag) {
        return new Promise(function(resolve,reject) {
            client.stream('statuses/filter', {track: hashtag}, (stream) => {
                stream.on('data', (tweet) => {
                    console.log(tweet.text);
                    resolve(tweet.text);
                });
            
                stream.on('error', (error) => {
                    reject(error);
                });
            });
        });
    }
}

module.exports.TwitterService = TwitterService;
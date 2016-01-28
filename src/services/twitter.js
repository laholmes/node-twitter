const Twitter = require('twitter');

// a wrapper for the twitter api calls library,
// npm twitter is callback based - calls are wrapped in promises
class TwitterService {
    constructor(twitterConfig) {
        this.client = new Twitter({
            consumer_key: twitterConfig.consumer_key,
            consumer_secret: twitterConfig.consumer_secret,
            access_token_key: twitterConfig.access_token_key,
            access_token_secret: twitterConfig.access_token_secret
        });
    }

    // REST
    getHashtag(hashtag) {
        var twitterClient = this.client;
        return new Promise((resolve, reject) => {
            twitterClient.get('search/tweets', { q: hashtag }, (error, tweets, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(tweets);
                }
            });
        });
    }

    // streaming
    streamHashtag(hashtag) {
        var twitterClient = this.client;
        return new Promise((resolve, reject) => {
            twitterClient.stream('statuses/filter', { track: hashtag }, (stream) => {
                stream.on('data', (tweet) => {
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
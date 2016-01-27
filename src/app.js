const tws = require('./services/twitter');
const TwitterService = new tws.TwitterService();
const fs = require('fs');
const input = require('../input/input.json');

// twitterService.getHashtag('input.hashtag')
// .then(function fulfilled(tweet) {
    
// }) function(tweets) {
//         fs.writeFile('message.txt', JSON.stringify(tweets[0]), (err) => {
//     if (err) throw err;
//     console.log('It\'s saved!');
//     });

// });

TwitterService.streamHashtag(input.hashtag)
    .then(function fulfilled(tweet) {
        fs.appendFile('output/message.txt', JSON.stringify(tweet), (err) => {
            if (err) {
                throw err;
            }
        });
    }, function rejected(err) {
        fs.writeFile('log/error.txt', err, (err) => {
            if (err) {
                throw err;
            }
        })
    });
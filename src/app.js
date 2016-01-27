const tws = require('./services/twitter');
const TwitterService = new tws.TwitterService();
const fs = require('fs');
const input = require('../input/input.json');

// twitterService.searchForHashtag('messi', function(tweets) {
//         fs.writeFile('message.txt', JSON.stringify(tweets[0]), (err) => {
//     if (err) throw err;
//     console.log('It\'s saved!');
//     });

// });

TwitterService.streamHashtag(input.hashtag)
    .then(function fulfilled(tweet) {
        fs.writeFile('output/message.txt', JSON.stringify(tweet), (err) => {
            if (err) {
                throw err;
            }
        });
    }, function rejected(err) {
        console.log(err);
        // need to save this error too
    });


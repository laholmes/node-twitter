const tws = require('./services/twitter');
const TwitterService = new tws.TwitterService();
const fs = require('fs');

// twitterService.searchForHashtag('messi', function(tweets) {
//         fs.writeFile('message.txt', JSON.stringify(tweets[0]), (err) => {
//     if (err) throw err;
//     console.log('It\'s saved!');
//     });

// });

TwitterService.streamHashtag(['twitter','newcastle'], function(tweet) {
      fs.writeFile('output/message.txt', JSON.stringify(tweet), (err) => {
        if (err) {
            throw err;
        }
    });
})


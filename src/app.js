const tws = require('./services/twitter');
const config = require('../config');
const TwitterService = new tws.TwitterService(config.twitter);
const fs = require('fs');
const input = require('../input/input.json');
const _ = require('lodash');

// rest call
TwitterService.getHashtag(input.hashtag)
    .then(function fulfilled(tweets) {
        if(tweets.statuses) {
            const summary = stringifySummary(tweets.statuses.length, input.hashtag);
            const statuses = _.map(tweets.statuses, (status) => { 
                return status.text; })
                .join('\n');

            saveRestOutput(summary, statuses);
        }
    });

// streaming call
// TwitterService.streamHashtag(input.hashtag)
//     .then(function fulfilled(tweet) {
//         fs.appendFile('output/message.txt', JSON.stringify(tweet), (err) => {
//             if (err) {
//                 logError(err);
//             }
//             return;
//         });
//     }, function rejected(err) {
//         logError(err);
//     });
    
function logError(err) {
    fs.writeFile('log/error.txt', err, (err) => {
        if (err) {
            throw err;
        }
    });
 }
 
function stringifySummary(count, hashtag) {
    const tweetCount = count ? count : 0;
    return '\nTWEETS: ' + tweetCount + ', HASHTAG: ' + hashtag;
 }
 exports.stringifySummary = stringifySummary;
 
function saveRestOutput(summary, statuses) {
    return fs.writeFile('output/message.txt', JSON.stringify(statuses), (err) => {
        if(err) {
            logError(err);
        }
        fs.appendFile('output/message.txt', summary, (err) => {
            if(err) {
                logError(err);
            }
            return;
        });
    });
 }
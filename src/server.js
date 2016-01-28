const Hapi = require('hapi');
const tws = require('./services/twitter');
const config = require('../config');
const TwitterService = new tws.TwitterService(config.twitter);
const _ = require('lodash');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/{hashtag}', 
    handler: function (request, reply) {
        TwitterService.getHashtag(request.params.hashtag)
            .then(function fulfilled(tweets) {
                if(tweets.statuses) {
                    const statuses = _.map(tweets.statuses, (status) => { 
                        return status.text; })
                    .join('\n');
                    return reply(statuses);
                } else {
                    return reply('nothing found for: ' + request.params.hashtag);
                }
            });
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
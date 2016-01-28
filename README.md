#node-twitter

a node app demoing integration with twitter api

##details
written in es6 (babel for transpiling es6)
uses npm twitter (wrapping callback-based api in promises)
local server instance using hapi

##setup
npm install - install all dependencies
set config - twitter api credentials should be stored in ./config.json as follows:

{
    "twitter": {
        "consumer_key": "abc1",
        "consumer_secret": "abc2",
        "access_token_key": "abc3",
        "access_token_secret": "abc4"
    }
}

gulp compile - compiles es6 src folder to dist folder using babel

##use

node dist/app.js - run the compiled app, calls rest endpoint. to use streaming, uncomment in src/app.js and recompile

input is taken from input/input.json
output is logged to the console and saved to output/output.json
errors are logged to the console and saved to log/error.json - this would be saved on driver

or

npm start - run a hapi server instance, navigate to localhost:8000/hashtag (hashtag query param - replace with your search)


##test

npm test (mocha)


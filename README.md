node app demoing integration with twitter api

written in es6

setup

use npm install to install all dependencies
twitter api credentials should be stored in ./config.json

use

gulp compile uses babel to compile the src

node dist/app.js runs the compiled app

input is taken from input/input.json
output is logged to the console and saved to output/output.json
errors are logged to the console and saved to log/error.json - this would be saved on driver

test

gulp test (runs on mocha)


[![Coverage Status](https://coveralls.io/repos/github/anarh/maze/badge.svg?branch=master)](https://coveralls.io/github/anarh/maze?branch=master) [![Build Status](https://travis-ci.org/anarh/maze.svg?branch=master)](https://travis-ci.org/anarh/maze)

# maze
Maze for fun

## Requirements
Node v4+, npm v2+

## Run Command Line
1. CLONE repo
2. RUN `node index.js` *(uses default maze.txt file)* **or** RUN `node index.js your-custom-maze-file.txt` *(use your custom file)*

## Run in Browser
1. CLONE repo
2. RUN `npm install`
3. RUN `npm run start:dev` **or** OPEN `/example/index.html` in your browser

## Live Demo
[https://mazeforfun.herokuapp.com/](https://mazeforfun.herokuapp.com/) powered by heroku.

## Other Tasks

### `npm start`
Starts the static webserver which serves pages out of the /example directory, powered by [http-server](https://www.npmjs.com/package/http-server)

### `npm test`
Executes the tests located in `test/test.js`, powered by [mocha](https://mochajs.org/)

### `npm run build`
Builds the javascript and css outputs for the browser, powered by [browserify](http://browserify.org/) and [sass](https://github.com/sass/node-sass)

### `npm run cover`
Executes the tests and creates a coverage report located in `./coverage`, powered by [coveralls](https://www.npmjs.com/package/coveralls)



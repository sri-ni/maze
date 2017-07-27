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

## Solving the maze

Solving the maze involves these few steps

### Parse raw data
Parses the raw data e.g. (3,3)-[34,14,12,6,77,5,1,19,9] into an object that represents the raw state of the maze
e.g.

```javascript
var parsedData = {
  size: [3, 3],
  structure: [34,14,12,6,77,5,1,19,9]
};
```

### Loop one time to hydrate maze

Single loop over parsed data structure to
1. Hydrate 2 by 2 array representation of maze while extracting bitwise data from cells to populate maze,
2. Collect cells that have more than 1 open side,
3. Identify start and end cells,
4. Identifty cells that are deadends, contain mines, etc,
3. Collect valid neighbors of each cell based on bitwise data

### Use recursion to find valid paths
1. Starting with the "start cell", collect valid neighbors into path towards "end cell".
2. If the last cell in the array is the "end cell", that will signify a valid path.
3. Filter and exclude paths with more than 2 mines
4. Sort paths and pick the shortest - this is the shortest path.


## Other Tasks

### `npm start`
Starts the static webserver which serves pages out of the /example directory, powered by [http-server](https://www.npmjs.com/package/http-server)

### `npm test`
Executes the tests located in `test/test.js`, powered by [mocha](https://mochajs.org/)

### `npm run build`
Builds the javascript and css outputs for the browser, powered by [browserify](http://browserify.org/) and [sass](https://github.com/sass/node-sass)

### `npm run cover`
Executes the tests and creates a coverage report located in `./coverage`, powered by [coveralls](https://www.npmjs.com/package/coveralls)

'use strict';

var fs = require('fs');
var filename = process.argv[2] || './mazes.txt';

var loadData = require('./components/load-initial-data');
var processData = require('./components/process-data');
var findSolutions = require('./components/solutions');

/**
 * Entry point for command line utility returns solutions e.g. ["up","left","up"] to
 * a provided maze definition that follows the pattern of e.g. (3,3)-[34,14,12,6,77,5,1,19,9]
 *
 * @param      {string}  filename  The filename
 * @return     {Array}   An array of solutions for each line of maze definition
 */
var processMazeDefinitions = function (filename) {
  return fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('Processing : ' + filename);

    var solutions = [];

    data.split(/\r?\n/).forEach(function (line, i) {
      var loadedData = loadData(line.toString());

      if (loadedData) {
        var processedData = processData(loadedData);
        var paths = findSolutions.getSolutions(processedData);
        var shortestPath = findSolutions.getShortestPath(paths);
        var shortestPathDirections = findSolutions.getShortestPathDirections(shortestPath);
        solutions.push(shortestPathDirections);
      }
    });

    // print each array solution to screen
    solutions.forEach(function (solution) {
      console.log(JSON.stringify(solution));
    });

    return solutions;
  });
};

processMazeDefinitions(filename);

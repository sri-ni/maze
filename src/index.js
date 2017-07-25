'use strict';

var fs = require('fs');
var filename = process.argv[2] || './mazes.txt';

var loadData = require('./components/load-initial-data');
var processData = require('./components/process-data');
var solutions = require('./components/solutions');

fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('Processing : ' + filename);

  data.split(/\r?\n/).forEach(function (line, i) {
    var loadedData = loadData(line.toString());

    if (loadedData) {
      var processedData = processData(loadedData);
      var paths = solutions.getSolutions(processedData);
      var shortestPath = solutions.getShortestPath(paths);
      var shortestPathDirections = solutions.getShortestPathDirections(shortestPath);

      console.log(JSON.stringify(shortestPathDirections));
      return shortestPathDirections;
    }
  });
});

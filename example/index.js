'use strict';

var fs = require('fs');
var fileContents = fs.readFileSync('./mazes.txt', 'utf8');

var loadData = require('../src/components/load-initial-data');
var processData = require('../src/components/process-data');
var solutions = require('../src/components/solutions');
var getMazeHTML = require('../src/components/get-maze-html');

/**
 * Renders maze html
 *
 * @param      {string}  fileContents   The file contents
 * @param      {Object}  mazeContainer  The maze container
 */
var renderMaze = function (fileContents, mazeContainer) {
  fileContents.split(/\r?\n/).forEach(function (line, i) {
    var loadedData = loadData(line.toString());

    if (loadedData) {
      var processedData = processData(loadedData);
      var paths = solutions.getValidPaths(processedData);
      var shortestPath = solutions.getShortestPath(paths);
      var shortestPathCells = solutions.getShortestPathCells(shortestPath);
      var shortestPathDirections = solutions.getShortestPathDirections(shortestPath);

      mazeContainer.innerHTML = mazeContainer.innerHTML + '<div class="directions">' + JSON.stringify(shortestPathDirections) + '</div>' + getMazeHTML.render(processedData.matrix);
      getMazeHTML.showPath(shortestPathCells, mazeContainer.querySelectorAll('table')[i]);

      return shortestPathDirections;
    }
  });
};

/**
 * Processes maze text file uploads initiated from the browser
 *
 * @param      {string}  filesInput     The files input
 * @param      {Object}  mazeContainer  The maze container
 */
var processUploads = function (filesInput, mazeContainer) {
  filesInput.addEventListener('change', function (event) {
    var files = event.target.files;

    if (!event.target.files) return;

    mazeContainer.innerHTML = '';

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      if (!file.type.match('plain')) continue;

      var mazeReader = new FileReader(); // eslint-disable-line

      mazeReader.addEventListener('load', function (event) {
        var textFile = event.target;
        renderMaze(textFile.result, mazeContainer);
      });
      mazeReader.readAsText(file);
    }
  });
};

/**
 * Starting function for the browser
 */
window.onload = function () {
  var mazeContainer = document.querySelector('#mazeContainer');
  var filesInputContainer = document.querySelector('#filesContainter');
  var filesInput = document.querySelector('#files');

  if (window.File && window.FileList && window.FileReader) {
    processUploads(filesInput, mazeContainer);
  } else {
    filesInputContainer.classList.add('hide');
    console.log('Your browser does not support File API');
  }

  renderMaze(fileContents, mazeContainer);
};

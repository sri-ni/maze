(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


var fileContents = "﻿(10,10)-[6,12,6,10,12,70,10,10,10,12,5,5,67,8,5,7,12,6,8,5,5,3,10,12,3,9,5,7,14,9,7,10,40,3,10,74,9,7,11,12,1,6,78,14,10,10,76,5,6,25,6,13,5,3,10,12,3,9,3,12,7,9,3,10,10,9,6,14,10,9,7,10,10,12,6,10,73,5,2,12,3,74,76,5,7,14,12,3,12,69,2,10,9,3,11,9,67,8,3,9]\n(15,15)-[4,2,14,12,6,10,14,14,14,10,12,6,10,10,12,3,10,9,3,11,12,7,13,3,8,3,15,10,12,5,6,12,6,10,10,9,5,3,10,10,10,13,2,9,5,5,5,3,14,12,6,9,6,14,12,4,5,6,74,13,5,3,26,9,1,7,10,9,5,5,5,5,3,12,5,5,2,10,10,12,5,6,72,5,5,5,5,2,9,1,69,6,12,6,9,1,7,10,9,3,9,67,10,10,12,7,9,7,9,4,6,9,4,6,14,14,12,6,10,13,3,12,3,12,3,9,6,13,5,7,11,9,3,10,13,4,3,76,5,6,8,5,5,5,3,10,14,14,10,9,5,6,11,11,9,6,9,3,9,4,6,9,3,10,12,5,3,10,12,6,13,6,10,12,7,11,10,8,6,13,3,74,12,5,5,5,3,40,5,5,6,8,6,9,5,6,10,9,5,5,3,74,10,9,5,71,12,3,12,5,3,10,10,9,3,10,10,10,72,67,9,3,10,9,1]\n(25,35)-[6,10,74,12,6,8,6,12,6,10,10,12,2,10,10,10,10,10,14,10,12,6,10,10,12,2,14,12,2,14,10,10,14,10,12,7,10,12,5,7,76,5,7,13,6,12,3,10,10,14,10,8,6,9,6,13,7,78,8,5,6,13,3,12,7,10,12,5,4,5,5,4,5,5,5,3,9,1,3,9,3,12,6,10,11,12,6,9,6,9,7,9,5,70,9,5,7,12,3,9,6,9,5,5,69,5,3,13,5,3,12,6,10,10,10,12,5,3,10,10,11,15,12,7,10,9,6,9,5,6,11,9,3,10,12,3,8,5,5,5,3,12,5,3,12,3,9,6,10,10,9,3,12,6,14,10,9,5,5,6,8,3,12,3,11,8,70,12,6,13,6,10,9,5,5,6,13,5,4,5,2,10,11,10,10,12,6,9,5,5,6,14,9,5,7,10,12,3,14,12,6,11,11,9,7,13,6,10,9,5,5,1,3,9,5,6,10,74,12,4,5,3,10,9,5,5,3,8,5,3,12,3,12,5,1,3,8,6,10,9,1,7,10,10,9,3,12,2,14,9,5,6,8,5,7,9,4,6,14,9,3,14,12,5,2,9,6,9,3,10,10,12,3,14,10,12,3,14,10,8,6,11,12,67,10,73,7,14,9,3,10,9,5,5,6,8,7,9,3,74,12,7,10,10,12,6,11,12,5,6,9,2,13,6,12,5,4,5,2,12,6,9,5,4,6,10,14,9,1,7,12,5,6,10,12,3,9,6,14,9,5,6,13,1,5,2,12,3,9,5,7,9,3,14,9,3,12,3,9,3,12,5,6,74,9,3,9,3,12,7,10,8,5,5,6,9,1,3,12,3,12,5,6,78,9,7,10,10,11,12,6,15,10,10,10,9,69,7,10,10,8,6,12,5,3,12,6,9,5,5,6,12,4,3,12,69,5,5,3,12,5,4,70,8,5,71,11,12,6,12,2,13,7,10,10,12,5,3,11,8,3,9,6,9,3,9,5,5,4,5,3,9,5,2,13,67,9,3,10,9,3,12,71,11,13,6,9,7,10,12,5,3,12,6,14,10,12,3,12,6,14,9,5,5,3,12,2,9,6,9,6,14,10,74,8,6,9,1,6,9,3,12,5,2,9,3,12,5,5,7,8,3,12,5,1,5,4,5,3,12,5,6,12,3,8,69,3,10,10,10,9,2,10,9,6,12,5,5,6,12,6,9,3,9,5,6,12,5,3,12,3,11,9,6,9,3,13,3,10,12,3,10,14,10,12,6,10,10,14,9,3,9,3,9,5,5,6,10,40,3,9,5,3,12,3,14,10,12,7,10,12,3,12,4,5,4,6,13,6,13,3,14,12,5,6,12,2,10,12,5,5,7,10,14,10,8,5,6,77,4,7,12,5,5,68,3,12,3,11,13,7,9,1,5,5,2,13,5,1,5,7,26,10,9,5,5,5,6,9,6,12,5,5,3,9,5,5,5,3,9,4,5,6,14,9,3,12,6,9,1,6,9,1,6,9,5,6,14,12,5,5,1,3,10,11,11,9,5,6,10,9,5,5,6,8,7,9,5,5,4,2,9,5,6,12,5,6,10,9,4,3,9,5,5,69,3,12,6,10,10,12,2,9,3,10,12,5,1,71,10,9,2,9,5,5,6,12,3,9,5,7,11,10,8,7,14,8,5,1,5,2,13,3,10,12,3,12,6,12,6,9,3,74,9,6,10,10,12,3,9,5,3,10,10,9,3,12,6,12,3,11,12,5,6,9,6,9,2,10,11,8,3,9,5,7,10,10,10,10,13,6,12,3,10,12,5,4,6,10,10,12,1,5,7,10,12,3,9,69,6,11,10,10,10,76,6,14,74,9,3,12,2,14,12,7,9,3,10,8,5,3,9,3,10,8,3,10,9,3,8,3,10,10,9,3,74,10,10,8,3,11,11,10,10,8,3,10,9,65,3,10,10,10,10,9]\n";

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

},{"../src/components/get-maze-html":18,"../src/components/load-initial-data":19,"../src/components/process-data":20,"../src/components/solutions":21}],2:[function(require,module,exports){

/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

module.exports = function(str){
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};
},{}],3:[function(require,module,exports){

module.exports = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'en',
  'for',
  'from',
  'how',
  'if',
  'in',
  'neither',
  'nor',
  'of',
  'on',
  'only',
  'onto',
  'out',
  'or',
  'per',
  'so',
  'than',
  'that',
  'the',
  'to',
  'until',
  'up',
  'upon',
  'v',
  'v.',
  'versus',
  'vs',
  'vs.',
  'via',
  'when',
  'with',
  'without',
  'yet'
]

},{}],4:[function(require,module,exports){

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

},{"to-space-case":15}],5:[function(require,module,exports){

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toCapitalCase

/**
 * Convert a `string` to capital case.
 *
 * @param {String} string
 * @return {String}
 */

function toCapitalCase(string) {
  return space(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
    return previous + letter.toUpperCase()
  })
}

},{"to-space-case":15}],6:[function(require,module,exports){

var camel = require('to-camel-case')
var capital = require('to-capital-case')
var constant = require('to-constant-case')
var dot = require('to-dot-case')
var none = require('to-no-case')
var pascal = require('to-pascal-case')
var sentence = require('to-sentence-case')
var slug = require('to-slug-case')
var snake = require('to-snake-case')
var space = require('to-space-case')
var title = require('to-title-case')

/**
 * Camel.
 */

exports.camel = camel

/**
 * Pascal.
 */

exports.pascal = pascal

/**
 * Dot. Should precede lowercase.
 */

exports.dot = dot

/**
 * Slug. Should precede lowercase.
 */

exports.slug = slug

/**
 * Snake. Should precede lowercase.
 */

exports.snake = snake

/**
 * Space. Should precede lowercase.
 */

exports.space = space

/**
 * Constant. Should precede uppercase.
 */

exports.constant = constant

/**
 * Capital. Should precede sentence and title.
 */

exports.capital = capital

/**
 * Title.
 */

exports.title = title

/**
 * Sentence.
 */

exports.sentence = sentence

/**
 * Convert a `string` to lower case from camel, slug, etc. Different that the
 * usual `toLowerCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.lower = function (string) {
  return none(string).toLowerCase()
}

/**
 * Convert a `string` to upper case from camel, slug, etc. Different that the
 * usual `toUpperCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.upper = function (string) {
  return none(string).toUpperCase()
}

/**
 * Invert each character in a `string` from upper to lower and vice versa.
 *
 * @param {String} string
 * @return {String}
 */

exports.inverse = function (string) {
  var chars = string.split('')
  for (var i = 0, char; char = chars[i]; i++) {
    if (!/[a-z]/i.test(char)) continue
    var upper = char.toUpperCase()
    var lower = char.toLowerCase()
    chars[i] = char == upper ? lower : upper
  }
  return chars.join('')
}

/**
 * None.
 */

exports.none = none

},{"to-camel-case":4,"to-capital-case":5,"to-constant-case":8,"to-dot-case":9,"to-no-case":10,"to-pascal-case":11,"to-sentence-case":12,"to-slug-case":13,"to-snake-case":14,"to-space-case":15,"to-title-case":16}],7:[function(require,module,exports){

var cases = require('./cases')

/**
 * Export `determineCase`.
 */

module.exports = exports = determineCase

/**
 * Export `cases`.
 */

exports.cases = cases

/**
 * Determine the case of a `string`.
 *
 * @param {String} string
 * @return {String|Null}
 */

function determineCase(string){
  for (var key in cases) {
    if (key == 'none') continue
    var convert = cases[key]
    if (convert(string) == string) return key
  }
  return null
}

/**
 * Define a case by `name` with a `convert` function.
 *
 * @param {String} name
 * @param {Object} convert
 */

exports.add = function(name, convert){
  exports[name] = cases[name] = convert
}

/**
 * Export all the `cases`.
 */

for (var key in cases) {
  exports.add(key, cases[key])
}

},{"./cases":6}],8:[function(require,module,exports){

var snake = require('to-snake-case')

/**
 * Export.
 */

module.exports = toConstantCase

/**
 * Convert a `string` to constant case.
 *
 * @param {String} string
 * @return {String}
 */

function toConstantCase(string) {
  return snake(string).toUpperCase()
}

},{"to-snake-case":14}],9:[function(require,module,exports){

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toDotCase

/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */

function toDotCase(string) {
  return space(string).replace(/\s/g, '.')
}

},{"to-space-case":15}],10:[function(require,module,exports){

/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

},{}],11:[function(require,module,exports){

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toPascalCase

/**
 * Convert a `string` to pascal case.
 *
 * @param {String} string
 * @return {String}
 */

function toPascalCase(string) {
  return space(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

},{"to-space-case":15}],12:[function(require,module,exports){

var clean = require('to-no-case')

/**
 * Export.
 */

module.exports = toSentenceCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toSentenceCase(string) {
  return clean(string).replace(/[a-z]/i, function (letter) {
    return letter.toUpperCase()
  }).trim()
}

},{"to-no-case":10}],13:[function(require,module,exports){

var toSpace = require('to-space-case')

/**
 * Export.
 */

module.exports = toSlugCase

/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */

function toSlugCase(string) {
  return toSpace(string).replace(/\s/g, '-')
}

},{"to-space-case":15}],14:[function(require,module,exports){

var toSpace = require('to-space-case')

/**
 * Export.
 */

module.exports = toSnakeCase

/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */

function toSnakeCase(string) {
  return toSpace(string).replace(/\s/g, '_')
}

},{"to-space-case":15}],15:[function(require,module,exports){

var clean = require('to-no-case')

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

},{"to-no-case":10}],16:[function(require,module,exports){

var sentence = require('to-sentence-case')
var escape = require('escape-regexp-component')
var minors = require('title-case-minors')

/**
 * Export.
 */

module.exports = toTitleCase

/**
 * Matchers.
 */

var escaped = minors.map(escape)
var minorMatcher = new RegExp('[^^]\\b(' + escaped.join('|') + ')\\b', 'ig')
var punctuationMatcher = /:\s*(\w)/g

/**
 * Convert a `string` to title case.
 *
 * @param {String} string
 * @return {String}
 */

function toTitleCase(string) {
  return sentence(string)
    .replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
      return previous + letter.toUpperCase()
    })
    .replace(minorMatcher, function (minor) {
      return minor.toLowerCase()
    })
    .replace(punctuationMatcher, function (letter) {
      return letter.toUpperCase()
    })
}

},{"escape-regexp-component":2,"title-case-minors":3,"to-sentence-case":12}],17:[function(require,module,exports){
'use strict';

/**
 * Gets the nominal cell index in the maze
 *
 * @param      {Array}  cellXY   The cell xy coordinates
 * @param      {number}  mazeWidth  The width of the maze
 * @return     {number}  { the nominal index of the cell in the maze }
 */
var getCellIndex = function (cellXY, mazeWidth) {
  return (cellXY[0] * mazeWidth) + cellXY[1];
};

/**
 * Returns data for each cell by looking up the matrix with the XY coordinates
 * of the cell
 *
 * @param      {Array}  matrix  The matrix
 * @param      {Array}  cellXY  The cell xy
 * @return     {Object}  { description_of_the_return_value }
 */
var getCellData = function (matrix, cellXY) {
  return matrix[cellXY[0]][cellXY[1]];
};

module.exports = {
  index: getCellIndex,
  data: getCellData
};

},{}],18:[function(require,module,exports){
'use strict';

var to = require('to-case');

/**
 * Gets the cell html.
 *
 * @param      {Object}   cellData  The cell data
 * @return     {string}  The cell html.
 */
var getCellHTML = function (cellData) {
  var classes = cellData.neighbors.map(function (cell) {
    return cell.direction;
  });

  for (let prop in cellData) {
    if (cellData[prop] === true) {
      classes.push(to.slug(prop));
    }
  }
  return `<td class="${classes.join(' ')}"></td>`;
};

/**
 * Gets the row html.
 *
 * @param      {Array}   rowData  The row data
 * @return     {string}  The row html.
 */
var getRowHTML = function (rowData) {
  var cells = [];
  rowData.forEach(function (cell) {
    cells.push(getCellHTML(cell));
  });
  return `<tr>${cells.join('')}</tr>`;
};

/**
 * Gets the maze html.
 *
 * @param      {Array}   mazeData  The maze data
 * @return     {string}  The maze html.
 */
var getMazeHTML = function (mazeData) {
  var rows = [];
  mazeData.forEach(function (row) {
    rows.push(getRowHTML(row));
  });
  return `<table class="maze">${rows.join('')}</table>`;
};

/**
 * Shows the path.
 *
 * @param      {Array}  shortestPathCells  The shortest path cells
 * @param      {boolean}  table            The table
 */
var showPath = function (shortestPathCells, table) {
  shortestPathCells.forEach(function (cell) {
    table.rows[cell[0]].cells[cell[1]].classList.add('in-path');
  });
};

module.exports = {
  render: getMazeHTML,
  showPath: showPath,
  getCellHTML: getCellHTML,
  getRowHTML: getRowHTML
};

},{"to-case":7}],19:[function(require,module,exports){
'use strict';

/**
 * Very simplistic split of the data to get the size of the maze
 * and the array of cells
 *
 * @param      {string}  line    The line
 * @return     {Object}  An object that contains the size of the maze and the array of cells that make up the maze
 */
module.exports = function (line) {
  var data = {
    size: [],
    structure: []
  };
  var raw = line.split('-');

  if (!raw[0] || !raw[1]) return;

  data.size = raw[0].replace('(', '').replace(')', '').split(',').map(Number);
  data.structure = JSON.parse(raw[1]).map(Number);
  return data;
};

},{}],20:[function(require,module,exports){
'use strict';

var getCell = require('./get-cell');

/**
 * Lookup for bitwise description for cell content.
 *
 * @type       {Object}
 */
var BIT_DETAILS = {
  'up': 1,
  'right': 2,
  'down': 4,
  'left': 8,
  'start': 16,
  'end': 32,
  'mine': 64
};

/**
 * Lookup for XY coordinates for neighbors of a cell.
 * up, down, right, left
 *
 * @type       {Object}
 */
var NEIGHBOR_RULES = {
  1: [-1, 0],
  2: [0, 1],
  4: [1, 0],
  8: [0, -1]
};

/**
 * Sets the cell state.
 *
 * @param      {number}  cellBit        The cell bit
 * @param      {Array}   cellXY         The cell xy coordinates
 * @param      {Object}  loadedData     The loaded data
 * @param      {Object}  processedData  The processed data
 * @return     {Object}  The cell state contains data to describe the cells contents and it's valid neighbors.
 */
var setCellState = function (cellBit, cellXY, loadedData, processedData) {
  var cellState = {
    cellNumber: getCell.index(cellXY, loadedData.size[0]),
    hasMine: false,
    isDeadEnd: false,
    isEnd: false,
    isStart: false,
    neighbors: []
  };

  for (var bit in BIT_DETAILS) {
    var neighborData = {
      cellNumber: null,
      cellXY: [],
      direction: ''
    };

    if ((cellBit & BIT_DETAILS[bit]) === BIT_DETAILS[bit]) {
      cellState.hasMine = bit === 'mine';

      if (bit === 'start') {
        cellState.isStart = bit === 'start';
        processedData.startCell = cellXY;
      }

      if (bit === 'end') {
        cellState.isEnd = bit === 'end';
        processedData.endCell = cellXY;
      }

      if (NEIGHBOR_RULES[BIT_DETAILS[bit]]) {
        neighborData.cellXY = [NEIGHBOR_RULES[BIT_DETAILS[bit]][0] + cellXY[0], NEIGHBOR_RULES[BIT_DETAILS[bit]][1] + cellXY[1]];
        neighborData.cellNumber = getCell.index(neighborData.cellXY, loadedData.size[0]);
        neighborData.direction = bit;
        cellState.neighbors.push(neighborData);
      }
    }
  }

  cellState.isDeadEnd = cellState.neighbors.length === 1;
  return cellState;
};

/**
 * Takes the raw data and processes it into an object that describes
 * a 2X2 matrix view of the maze, the start cell, end cell, and open cells
 * that can form a path.
 *
 * @param      {Object}  loadedData  The loaded data
 * @return     {Object}  Processed data
 */
var processData = function (loadedData) {
  var processedData = {
    matrix: [],
    startCell: [],
    endCell: [],
    openCells: []
  };

  while (processedData.matrix.length < loadedData.size[0]) {
    var row = [];
    while (row.length < loadedData.size[1]) {
      var cellXY = [processedData.matrix.length, row.length];
      var cellState = setCellState(loadedData.structure.shift(), cellXY, loadedData, processedData);
      row.push(cellState);
      if (cellState.isEnd || (!cellState.isDeadEnd && !cellState.isStart)) {
        processedData.openCells.push(cellState.cellNumber);
      }
    }
    processedData.matrix.push(row);
  }

  return processedData;
};

module.exports = processData;

},{"./get-cell":17}],21:[function(require,module,exports){
'use strict';

var getCell = require('./get-cell');

/**
 * Number of lives available while navigating over mines. A life is lost when the character goes over a mine.
 *
 * @type       {number}
 */
var NUMBER_OF_LIVES = 2;

/**
 * Gets the valid paths.
 *
 * @param      {Object}   processedData  The processed data
 * @return     {Array}    Valid paths as arrays.
 */
var getValidPaths = function (processedData) {
  var matrix = processedData.matrix;
  var startCell = processedData.startCell;
  var endCell = processedData.endCell;
  var openCells = processedData.openCells;

  return getPath(matrix, [], [], startCell, endCell, null, openCells);
};

/**
 * Gets the shortest valid path.
 *
 * @param      {Array}  validPaths  The valid paths
 * @return     {Array}  The shortest path.
 */
var getShortestPath = function (validPaths) {
  return validPaths.sort(function (a, b) {
    return a.length - b.length;
  })[0];
};

/**
 * Gets the shortest path directions.
 *
 * @param      {Array}  shortestPath  The shortest path
 * @return     {Array}  The shortest path directions.
 */
var getShortestPathDirections = function (shortestPath) {
  return shortestPath.map(function (path) {
    return path.direction;
  });
};

/**
 * Gets shortest path array with cellXYs.
 *
 * @param      {Array}  shortestPath  The shortest path
 * @return     {Array}  The shortest path cell data.
 */
var getShortestPathCells = function (shortestPath) {
  return shortestPath.map(function (cell) {
    return cell.cellXY;
  });
};

/**
 * Adds a cell to path.
 *
 * @param      {Array}    root     The root path
 * @param      {Object}   pathObj  The path object
 * @return     {Array}    New root path with added cell
 */
var addCelltoPath = function (root, pathObj) {
  var newRoot = root.map(function (r) { return r; });
  newRoot.push(pathObj);
  return newRoot;
};

/**
 * Gets the path.
 * A recursive function that finds valid paths from start cell to end cell
 *
 * @param      {Array}    matrix     The matrix of the maze
 * @param      {Array}    paths      The paths
 * @param      {Array}    rootPath   The root path
 * @param      {Array}    startCell  The coordinates of the start cell
 * @param      {Array}    endCell    The end cell
 * @param      {number}   prevCell   The previous cell
 * @param      {Array}    openCells  Open cells are a list of viable cells that can make a valid path
 * @return     {Array}    The path as an array of cells.
 */
var getPath = function (matrix, paths, rootPath, startCell, endCell, prevCell, openCells) {
  var startCellData = getCell.data(matrix, startCell);
  var endCellData = getCell.data(matrix, endCell);
  var availableCells = openCells.map(function (cell) { return cell; });
  var neighbors = startCellData.neighbors.filter(function (n) {
    return n.cellNumber !== prevCell;
  });

  neighbors.forEach(function (neighbor) {
    var pathObj = {
      direction: neighbor.direction,
      cellNumber: neighbor.cellNumber,
      cellXY: neighbor.cellXY,
      hasMine: getCell.data(matrix, neighbor.cellXY).hasMine
    };
    var newRootPath = addCelltoPath(rootPath, pathObj);
    var hasEndCell = newRootPath[newRootPath.length - 1].cellNumber === endCellData.cellNumber;
    var neighborIndex = availableCells.indexOf(neighbor.cellNumber);
    var mines = newRootPath.filter(function (path) {
      return path.hasMine === true;
    });

    availableCells.splice(neighborIndex, 1);

    if (hasEndCell && mines.length <= NUMBER_OF_LIVES) {
      paths.push(newRootPath);
    } else {
      if (neighborIndex !== -1) {
        getPath(matrix, paths, newRootPath, neighbor.cellXY, endCell, startCellData.cellNumber, availableCells);
      }
    }
  });

  return paths;
};

module.exports = {
  getValidPaths: getValidPaths,
  getShortestPath: getShortestPath,
  getShortestPathDirections: getShortestPathDirections,
  getShortestPathCells: getShortestPathCells
};

},{"./get-cell":17}]},{},[1]);

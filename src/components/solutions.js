'use strict';

var getCell = require('./get-cell');

/**
 * { var_description }
 *
 * @type       {number}
 */
var NUMBER_OF_LIVES = 3;

/**
 * Gets the solutions.
 *
 * @param      {Object}  processedData  The processed data
 * @return     {Array}  The solutions.
 */
var getSolutions = function (processedData) {
  var matrix = processedData.matrix;
  var startCell = processedData.startCell;
  var endCell = processedData.endCell;
  var openCells = processedData.openCells;

  return getPath(matrix, [], [], startCell, endCell, null, openCells);
};

/**
 * Gets the shortest path.
 *
 * @param      {Array}  solutions  The solutions
 * @return     {Array}  The shortest path.
 */
var getShortestPath = function (solutions) {
  return solutions.sort(function (a, b) {
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
 * Gets the shortest path cells.
 *
 * @param      {Array}  shortestPath  The shortest path
 * @return     {Array}  The shortest path cells.
 */
var getShortestPathCells = function (shortestPath) {
  return shortestPath.map(function (cell) {
    return cell.cellXY;
  });
};

/**
 * Adds a cellto path.
 *
 * @param      {Array}  root     The root
 * @param      {Object}  pathObj  The path object
 * @return     {Array}   { description_of_the_return_value }
 */
var addCelltoPath = function (root, pathObj) {
  var newRoot = root.map(function (r) { return r; });
  newRoot.push(pathObj);
  return newRoot;
};

/**
 * Gets the path.
 *
 * @param      {Array}  matrix     The matrix
 * @param      {Array}   paths      The paths
 * @param      {Array}  rootPath   The root path
 * @param      {Array}  startCell  The start cell
 * @param      {Array}  endCell    The end cell
 * @param      {number}  prevCell   The previous cell
 * @param      {Array}  openCells  The open cells
 * @return     {Array}   The path.
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

    if (hasEndCell && mines.length < NUMBER_OF_LIVES) {
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
  getSolutions: getSolutions,
  getShortestPath: getShortestPath,
  getShortestPathDirections: getShortestPathDirections,
  getShortestPathCells: getShortestPathCells
};

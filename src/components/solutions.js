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

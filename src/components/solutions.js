'use strict';

var getCell = require('./get-cell');

var NUMBER_OF_LIVES = 3;

var getSolutions = function (processedData) {
  var matrix = processedData.matrix;
  var startCell = processedData.startCell;
  var endCell = processedData.endCell;
  var openCells = processedData.openCells;

  return getPath(matrix, [], [], startCell, endCell, null, openCells);
};

var getShortestPath = function (solutions) {
  return solutions.sort(function (a, b) {
    return a.length - b.length;
  })[0];
};

var getShortestPathDirections = function (shortestPath) {
  return shortestPath.map(function (path) {
    return path.direction;
  });
};

var getShortestPathCells = function (shortestPath) {
  return shortestPath.map(function (cell) {
    return cell.cellXY;
  });
};

var addCelltoPath = function (root, pathObj) {
  var newRoot = root.map(function (r) { return r; }) || [];
  newRoot.push(pathObj);
  return newRoot;
};

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

'use strict';

const getCell = require('./get-cell');

/**
 * Lookup for bitwise description for cell content.
 *
 * @type       {Object}
 */
const BIT_DETAILS = {
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
const NEIGHBOR_RULES = {
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

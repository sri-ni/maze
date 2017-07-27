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

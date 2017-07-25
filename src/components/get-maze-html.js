'use strict';

var getCellHTML = function (cellData) {
  var classes = cellData.neighbors.map(function (cell) {
    return cell.direction;
  });

  for (let prop in cellData) {
    if (cellData[prop] === true) {
      classes.push(prop);
    }
  }
  return `<td class="${classes.join(' ')}"></td>`;
};

var getRowHTML = function (rowData) {
  var cells = [];
  rowData.forEach(function (cell) {
    cells.push(getCellHTML(cell));
  });
  return `<tr>${cells.join('')}</tr>`;
};

var getMazeHTML = function (mazeData) {
  var rows = [];
  mazeData.forEach(function (row) {
    rows.push(getRowHTML(row));
  });
  return `<table class="maze">${rows.join('')}</table>`;
};

var showPath = function (shortestPathCells, table) {
  shortestPathCells.forEach(function (cell) {
    table.rows[cell[0]].cells[cell[1]].classList.add('inPath');
  });
};

module.exports = {
  render: getMazeHTML,
  showPath: showPath,
  getCellHTML: getCellHTML,
  getRowHTML: getRowHTML
};

'use strict';

var number = function (cellXY, XLength) {
  return (cellXY[0] * XLength) + cellXY[1];
};

var data = function (matrix, cellXY) {
  return matrix[cellXY[0]][cellXY[1]];
};

module.exports = {
  number: number,
  data: data
};

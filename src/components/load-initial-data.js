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

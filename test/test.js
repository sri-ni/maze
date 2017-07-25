/* global describe, it */

'use strict';

var assert = require('assert');

var getCell = require('../src/components/get-cell');
var getmazeHTML = require('../src/components/get-maze-html');
var loadData = require('../src/components/load-initial-data');
var processData = require('../src/components/process-data');
var solutions = require('../src/components/solutions');

var fixture = require('./mazeFixture');

describe('getCell', function () {
  describe('#number', function () {
    it('should return 0 when the cellXY is [0, 0] regardless of maze size', function () {
      assert.equal(0, getCell.number([0, 0], 0));
      assert.equal(0, getCell.number([0, 0], 3));
      assert.equal(0, getCell.number([0, 0], 10));
      assert.equal(0, getCell.number([0, 0], 7));
    });
  });

  describe('#data', function () {
    it('should return cellData object for cellXY. Object contains keys like hasMine, isDeadEnd, etc', function () {
      assert.ok(getCell.data(fixture.matrix, [0, 0]));
      assert.notEqual(-1, Object.keys(getCell.data(fixture.matrix, [0, 0])).indexOf('isStart'));
      assert.notEqual(-1, Object.keys(getCell.data(fixture.matrix, [0, 0])).indexOf('isEnd'));
      assert.notEqual(-1, Object.keys(getCell.data(fixture.matrix, [0, 0])).indexOf('hasMine'));
    });
  });
});

describe('getMazeHTML', function () {
  describe('#getCellHTML', function () {
    it('should return HTML for cell data', function () {
      assert.equal('<td class=\"right isDeadEnd isEnd\"></td>', getmazeHTML.getCellHTML(fixture.matrix[0][0]));
      assert.equal('<td class="up down left hasMine"></td>', getmazeHTML.getCellHTML(fixture.matrix[1][1]));
    });
  });

  describe('#getRowHTML', function () {
    it('should return HTML for row data', function () {
      assert.equal('<tr><td class=\"right isDeadEnd isEnd\"></td><td class=\"right down left\"></td><td class=\"down left\"></td></tr>', getmazeHTML.getRowHTML(fixture.matrix[0]));
      assert.equal('<tr><td class=\"right down\"></td><td class=\"up down left hasMine\"></td><td class=\"up down\"></td></tr>', getmazeHTML.getRowHTML(fixture.matrix[1]));
    });
  });
});

describe('loadData', function () {
  it('should return object { size: [], structure: []} for raw data', function () {
    assert.equal('{"size":[3,3],"structure":[34,14,12,6,77,5,1,19,9]}', JSON.stringify(loadData('(3,3)-[34,14,12,6,77,5,1,19,9]')));
  });
});

describe('processData', function () {
  it('should return object { matrix: [], startCell: [], endCell: []} for loaded data', function () {
    assert.equal(JSON.stringify(fixture), JSON.stringify(processData(loadData('(3,3)-[34,14,12,6,77,5,1,19,9]'))));
  });
});

describe('solutions', function () {
  describe('#getSolutions', function () {
    it('should return an array of solutions for maze', function () {
      assert.ok(solutions.getSolutions(fixture));
      assert.equal(2, solutions.getSolutions(fixture).length);
    });
  });

  describe('#getShortestPath', function () {
    it('should only 1 array of shortest path solution', function () {
      assert.ok(solutions.getShortestPath(solutions.getSolutions(fixture)));
    });
  });

  describe('#getShortestPath', function () {
    it('should only 1 array of shortest path solution', function () {
      assert.deepEqual([ 'up', 'up', 'left' ], solutions.getShortestPathDirections(solutions.getShortestPath(solutions.getSolutions(fixture))));
    });
  });
});

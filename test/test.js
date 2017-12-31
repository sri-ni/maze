/* global describe, it */

'use strict';

var assert = require('assert');

var getCell = require('../src/components/get-cell');
var getMazeHTML = require('../src/components/get-maze-html');
var loadData = require('../src/components/load-initial-data');
var processData = require('../src/components/process-data');
var solutions = require('../src/components/solutions');

var fixture = require('./mazeFixture');

describe('getCell', function () {
  describe('#index', function () {
    it('should return 0 when the cellXY is [0, 0] regardless of maze size', function () {
      assert.equal(0, getCell.index([0, 0], 0));
      assert.equal(0, getCell.index([0, 0], 3));
      assert.equal(0, getCell.index([0, 0], 10));
      assert.equal(0, getCell.index([0, 0], 7));
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
      assert.equal('<td class="right is-dead-end is-end"></td>', getMazeHTML.getCellHTML(fixture.matrix[0][0]));
      assert.equal('<td class="up down left has-mine"></td>', getMazeHTML.getCellHTML(fixture.matrix[1][1]));
    });
  });

  describe('#getRowHTML', function () {
    it('should return HTML for row data', function () {
      assert.equal('<tr><td class="right is-dead-end is-end"></td><td class="right down left"></td><td class="down left"></td></tr>', getMazeHTML.getRowHTML(fixture.matrix[0]));
      assert.equal('<tr><td class="right down"></td><td class="up down left has-mine"></td><td class="up down"></td></tr>', getMazeHTML.getRowHTML(fixture.matrix[1]));
    });
  });

  describe('#getTableHTML', function () {
    it('should return HTML for row data', function () {
      assert.equal('<table class="maze"><tr><td class="right is-dead-end is-end"></td><td class="right down left"></td><td class="down left"></td></tr><tr><td class="right down"></td><td class="up down left has-mine"></td><td class="up down"></td></tr><tr><td class="up is-dead-end"></td><td class="up right is-start"></td><td class="up left"></td></tr></table>', getMazeHTML.render(fixture.matrix));
    });
  });
});

describe('loadData', function () {
  describe('#getData', function () {
    it('should return object { size: [], structure: []} for raw data', function () {
      assert.equal('{"size":[3,3],"structure":[34,14,12,6,77,5,1,19,9]}', JSON.stringify(loadData('(3,3)-[34,14,12,6,77,5,1,19,9]')));
    });
  });

  describe('#getData', function () {
    it('should return undefined for bad/empty raw data', function () {
      assert.equal(undefined, JSON.stringify(loadData('')));
    });
  });
});

describe('processData', function () {
  it('should return object { matrix: [], startCell: [], endCell: []} for loaded data', function () {
    assert.equal(JSON.stringify(fixture), JSON.stringify(processData(loadData('(3,3)-[34,14,12,6,77,5,1,19,9]'))));
  });
});

describe('solutions', function () {
  describe('#getValidPaths', function () {
    it('should return an array of valid paths for maze', function () {
      assert.ok(solutions.getValidPaths(fixture));
      assert.equal(2, solutions.getValidPaths(fixture).length);
    });
  });

  describe('#getShortestPath', function () {
    it('should return only 1 array of shortest valid path', function () {
      assert.ok(solutions.getShortestPath(solutions.getValidPaths(fixture)));
    });
  });

  describe('#getShortestPathDirections', function () {
    it('should return only 1 array of shortest valid path directions', function () {
      assert.deepEqual([ 'up', 'up', 'left' ], solutions.getShortestPathDirections(solutions.getShortestPath(solutions.getValidPaths(fixture))));
    });
  });

  describe('#getShortestPathCells', function () {
    it('should return only 1 array of shortest valid path containing cellXYs', function () {
      assert.deepEqual([ [1, 1], [0, 1], [0, 0] ], solutions.getShortestPathCells(solutions.getShortestPath(solutions.getValidPaths(fixture))));
    });
  });
});

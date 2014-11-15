describe('dummy', function () {
    'use strict';

    var assert = require('assert'),
        g = require('../src/game');

    describe('isAlive', function () {
        it('isAlive is true in trivial case', function () {
            assert(g.isAlive([[1]], 0, 0));
        });

        it('isAlive is false for a dead cell', function () {
            assert(!g.isAlive([[0]], 0, 0));
        });

        it('2 columns', function () {
            assert(g.isAlive([[0, 1]], 0 ,1));
        });
    });

    describe('nbDeltas', function () {
            var all = g.nbDeltas(0, 0);

        it('nbDeltas has 8 things', function () {
            assert.strictEqual(all.length, 8);
        });

        it('nbDeltas returns pairs', function () {
            assert.strictEqual(all[0].length, 2);
        });

        it('nbDeltas returns pairs', function () {

            all.forEach(function (pair) {
                assert.strictEqual(pair.length, 2);
            });
        });

        it('samePair is true for same', function () {
            assert(!g.samePair(all[0], all[1]));
        });
    });

    describe('samePair', function () {
        it('samePair is true for same', function () {
            assert(g.samePair([0, 0], [0, 0]));
        });

        it('samePair is true for same', function () {
            assert(!g.samePair([0, 1], [0, 0]));
        });
    });
});

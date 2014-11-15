(function () {
    'use strict';

    exports.isAlive = function (world, row, column) {
        return world[row][column] === 1;
    };

    exports.nbDeltas = function () {
        return [[1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    };

    exports.samePair = function (p1, p2) {return p1[0] === p2[0] && p1[1] === p2[1];};
}());

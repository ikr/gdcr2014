(function () {
    'use strict';

    var world = [
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    cycle,
        j,
        generationsLimit = 3,
        worldSize = 4,

        clone = function (x) {
            return JSON.parse(JSON.stringify(x));
        },

        inBounds = function (x) {
            return ((x >= 0) && (x < worldSize));
        },

        cell = function (row, column) {
            if (!inBounds(row) || !inBounds(column)) {
                return 0;
            }

            return world[row][column];
        },

        countNeighbors = function (row, column) {
            var currentRow, currentColumn, result = 0;

            for (currentRow = row - 1; currentRow <= row + 1; currentRow++) {
                for (currentColumn = column - 1; currentColumn <= column + 1; currentColumn++) {
                    result = result + cell(currentRow, currentColumn);
                }
            }

            return result;
        },

        printTheWorld = function (world) {
            for (j = 0; j < worldSize; j++) {
                console.info(world[j].join(''));
            }

            console.info('');
        },

        compute = function (world) {
            var result = clone(world);

            result[0][0] = 0;
            result[0][1] = 0;

            return result;
        },

        computeAndPrintGeneration = function () {
            printTheWorld(world);
            world = compute(world);
        };

    for (cycle = 0; cycle < generationsLimit; cycle = cycle + 1) {
        computeAndPrintGeneration(cycle);
    }

}());

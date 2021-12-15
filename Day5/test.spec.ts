const assert = require('assert');
const puzzleInput = require('./string.ts');
let HydrothermalVenture1 = require('./Part1/adventPart1.ts');

describe('Advent Calendar', function () {
    describe('HydrothermalVenture1', function () {
        it('should return 5', function () {
            const input: string = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
            const result = HydrothermalVenture1.HydrothermalVenture(input);
            assert.equal(result, 5);
        });

        it('should return 4421', function () {
            const result = HydrothermalVenture1.HydrothermalVenture(puzzleInput.inputTest);
            assert.equal(result, 4421);
        });

    });
});
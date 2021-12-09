const assert = require('assert');
const puzzleInput = require('./string.ts');
let Lanternfish1 = require('./Part1/adventPart1.ts');
let Lanternfish2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Lanternfish1', function () {
        it('should return 5934', function () {
            const input: string = `3,4,3,1,2`;
            const result = Lanternfish1.Lanternfish(input);
            assert.equal(result, 5934);
        });

        it('should return 345387', function () {
            const result = Lanternfish1.Lanternfish(puzzleInput.inputTest);
            assert.equal(result, 345387);
        });

    });
    describe('Lanternfish2', function () {
        it('should return 0', function () {
            const result = Lanternfish2.Lanternfish(puzzleInput.inputTest);
            assert.equal(result, 0);
        });
    });
});
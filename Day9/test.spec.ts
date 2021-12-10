const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Smoke Basin1', function () {
//         it('should return 15', function () {
//             const input: string = `2199943210
// 3987894921
// 9856789892
// 8767896789
// 9899965678`;
//             const result = Advent1.SmokeBasin(input);
//             assert.equal(result, 15);
//         });

//         it('should return 631', function () {
//             const result = Advent1.SmokeBasin(puzzleInput.inputTest);
//             assert.equal(result, 631);
//         });

    });
    describe('Smoke Basin2', function () {
        it('should return 1134', function () {
            const input: string = `2199943210
3987894921
9856789892
8767896789
9899965678`;
            const result = Advent2.SmokeBasin(input);
            assert.equal(result, 1134);
        });

        // it('should return 631', function () {
        //     const result = Advent2.SmokeBasin(puzzleInput.inputTest);
        //     assert.equal(result, 631);
        // });

    });
});
const assert = require('assert');
const puzzleInput = require('./string.ts');
let GiantSquid1 = require('./Part1/adventPart1.ts');
let GiantSquid2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('GiantSquid1', function () {
        it('should return 198', function () {
            const input: string = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
8  2 23  4 24
21  9 14 16  7
6 10  3 18  5
1 12 20 15 19

3 15  0  2 22
9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
2  0 12  3  7`;
            const result = GiantSquid1.GiantSquid(input);
            assert.equal(result, 4512);
        });

        it('should return 46920', function () {
            const result = GiantSquid1.GiantSquid(puzzleInput.inputTest);
            assert.equal(result, 46920);
        });

    });

    describe('GiantSquid2', function () {
        it('should return 1924', function () {
            const input: string = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
8  2 23  4 24
21  9 14 16  7
6 10  3 18  5
1 12 20 15 19

3 15  0  2 22
9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
2  0 12  3  7`;
            const result = GiantSquid2.GiantSquid(input);
            assert.equal(result, 1924);
        });

        it('should return 12635', function () {
            const result = GiantSquid2.GiantSquid(puzzleInput.inputTest);
            assert.equal(result, 12635);
        });

    });
});
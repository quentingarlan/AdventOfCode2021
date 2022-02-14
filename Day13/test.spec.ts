import { inputTest } from "./string";

const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
//     describe('TransparentOrigami', function () {
//         it('should return 17', function () {
//             const input: string = `6,10
// 0,14
// 9,10
// 0,3
// 10,4
// 4,11
// 6,0
// 6,12
// 4,1
// 0,13
// 10,12
// 3,4
// 3,0
// 8,4
// 1,10
// 2,14
// 8,10
// 9,0

// fold along y=7
// fold along x=5`;
//             const result = Advent1.TransparentOrigami(input);
//             assert.equal(result, 17);
//         });


//         it('should return 724', function () {
//             const result = Advent1.TransparentOrigami(inputTest);
//             assert.equal(result, 724);
//         });

//     });

    describe('TransparentOrigami 2', function () {

        it('should return  ', function () {
            const result = Advent2.TransparentOrigami(inputTest);
            assert.equal(result, 17);
        });

    });
});
const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('PassagePathing', function () {
        it('should return 10', function () {
            const input: string = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;
            const result = Advent1.PassagePathing(input);
            assert.equal(result, 10);
        });

//         it('should return 226', function () {
//             const input: string = `dc-end
// HN-start
// start-kj
// dc-start
// dc-HN
// LN-dc
// HN-end
// kj-sa
// kj-HN
// kj-dc`;
//             const result = Advent1.PassagePathing(input);
//             assert.equal(result, 226);
//         });

        // it('should return 399153', function () {
        //     const result = Advent1.SyntaxScoring(puzzleInput.inputTest);
        //     assert.equal(result, 399153);
        // });

    });

});
const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');


describe('Advent Calendar', function () {
    describe('TreacheryOfWhales1', function () {
        it('should return 37', function () {
            const input: string = `16,1,2,0,4,2,7,1,2,14`;
            const result = Advent1.TreacheryOfWhales(input);
            assert.equal(result, 37);
        });

        it('should return 0', function () {
            const result = Advent1.TreacheryOfWhales(puzzleInput.inputTest);
            assert.equal(result, 0);
        });

    });
    // describe('Lanternfish2', function () {
    //     it('should return 0', function () {
    //         const result = Lanternfish2.Lanternfish(puzzleInput.inputTest);
    //         assert.equal(result, 0);
    //     });
    // });
});
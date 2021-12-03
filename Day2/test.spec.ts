const assert = require('assert');
const input = require('./string.ts');
let dive1 = require('./Part1/adventPart1.ts');
let dive2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Dive part1', function () {
        it('should return 150', function () {
            const input: string = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
            const result = dive1.Dive(input);
            assert.equal(result, 150);
        });

        it('should return 1692075', function () {
            const result = dive1.Dive(input.inputTest);
            assert.equal(result, 1692075);
        });
    });

    describe('Dive part2', function () {
        it('should return 150', function () {
            const input: string = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
const result = dive2.Dive(input);
            assert.equal(result, 900);
        });

        it('should return 1749524700', function () {
            const result = dive2.Dive(input.inputTest);
            assert.equal(result, 1749524700);
        });
     
    });

});
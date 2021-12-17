const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('DumboOctopus1', function () {
        it('should return 1656', function () {
            const input: string = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;
            const result = Advent1.DumboOctopus(input);
            assert.equal(result, 1656);
        });

        it('should return 1729', function () {
            const input: string = `2344671212
6611742681
5575575573
3167848536
1353827311
4416463266
2624761615
1786561263
3622643215
4143284653`;
            const result = Advent1.DumboOctopus(input);
            assert.equal(result, 1729);
        });
    });

    describe('DumboOctopus2', function () {
        it('should return 195', function () {
            const input: string = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;
            const result = Advent2.DumboOctopus(input);
            assert.equal(result, 195);
        });

        it('should return 1729', function () {
            const input: string = `2344671212
6611742681
5575575573
3167848536
1353827311
4416463266
2624761615
1786561263
3622643215
4143284653`;
            const result = Advent2.DumboOctopus(input);
            assert.equal(result, 1729);
        });
    });

});
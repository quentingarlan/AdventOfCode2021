const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');

describe('Advent Calendar', function () {
    describe('Chiton', function () {
        it('should return 40', function () {
            const input: string = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;
            const result = Advent1.Chiton(input);
            assert.equal(result, 40);
        });


    });
  
});
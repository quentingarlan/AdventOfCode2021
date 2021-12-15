const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('ExtendedPolymerization', function () {
        it('should return 1588', function () {
            const input: string = `NNCB

            CH -> B
            HH -> N
            CB -> H
            NH -> C
            HB -> C
            HC -> B
            HN -> C
            NN -> C
            BH -> H
            NC -> B
            NB -> B
            BN -> B
            BB -> N
            BC -> B
            CC -> N
            CN -> C`;
            const result = Advent1.ExtendedPolymerization(input);
            assert.equal(result, 1588);
        }).timeout(50000);

        it('should return 2233', function () {
            const result = Advent1.ExtendedPolymerization(puzzleInput.inputTest);
            assert.equal(result, 2233);
        }).timeout(50000);

    });
    describe('ExtendedPolymerization', function () {
        it('should return 2188189693529', function () {
            const input: string = `NNCB

            CH -> B
            HH -> N
            CB -> H
            NH -> C
            HB -> C
            HC -> B
            HN -> C
            NN -> C
            BH -> H
            NC -> B
            NB -> B
            BN -> B
            BB -> N
            BC -> B
            CC -> N
            CN -> C`;
            const result = Advent2.ExtendedPolymerization(input);
            assert.equal(result, 2188189693529);
        }).timeout(50000);

        // it('should return 2233', function () {
        //     const result = Advent1.ExtendedPolymerization(puzzleInput.inputTest);
        //     assert.equal(result, 2233);
        // }).timeout(50000);

    });
});
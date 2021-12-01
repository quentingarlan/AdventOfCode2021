const assert = require('assert');
const inputTest = require('./string.json');
let sonarSweepPart1 = require('./Part1/adventPart1.ts');
let sonarSweepPart2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('SonarSweep part1', function () {
        it('should return 7', function () {
            let input: number[] = [
            ;
            var result = sonarSweepPart1.SonarSweep(input);
            assert.equal(result, 7);
        });

        it('should return 1715', function () {
            var result = sonarSweepPart1.SonarSweep(inputTest);
            assert.equal(result, 1715);
        });
    });
    describe('SonarSweep part2', function () {

        it('should return 5', function () {
            let input: number[] = [

            ;
            var result = sonarSweepPart2.SonarSweep(input);
            assert.equal(result, 5);
        });

        it('should return 1739', function () {
            var result = sonarSweepPart2.SonarSweep(inputTest);
            assert.equal(result, 1739);
        });
    });

});
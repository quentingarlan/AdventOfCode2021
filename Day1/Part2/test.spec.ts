const assert = require('assert');
const inputTest = require('../string.json');
let sonarSweep = require('./adventCalc.ts');

describe('AdventCalc', function () {

    describe('SonarSweep', function () {

        it('should return 5', function () {
            let input: number[] = [
                199,
            200,
            208,
            210,
            200,
            207,
            240,
            269,
            260,
            263]
            ;
            var result = sonarSweep.SonarSweep(input);
            assert.equal(result, 5);
        });

        it('should return  1739', function () {
            var result = sonarSweep.SonarSweep(inputTest);
            assert.equal(result, 1739);
        });
    });

});
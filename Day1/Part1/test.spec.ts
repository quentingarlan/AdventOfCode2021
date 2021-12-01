const assert = require('assert');
const inputTest = require('./string.json');
let sonarSweep = require('./adventCalc.ts');

describe('AdventCalc', function () {

    describe('SonarSweep', function () {

        it('should return 7', function () {
            let input: string[] = [
                "199",
            "200",
            "208",
            "210",
            "200",
            "207",
            "240",
            "269",
            "260",
            "263"]
            ;
            var result = sonarSweep.SonarSweep(input);
            assert.equal(result, 7);
        });

        it('should return  1715', function () {
            var result = sonarSweep.SonarSweep(inputTest);
            assert.equal(result, 1715);
        });
    });

});
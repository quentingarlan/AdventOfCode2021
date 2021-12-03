const assert = require('assert');
const puzzleInput = require('./string.ts');
let binaryDiagnostic1 = require('./Part1/adventPart1.ts');
let binaryDiagnostic2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Binary Diagnostic1', function () {
        it('should return 198', function () {
            const input: string = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
            const result = binaryDiagnostic1.BinaryDiagnostic(input);
            assert.equal(result, 198);
        });

        it('should return ', function () {
            const result = binaryDiagnostic1.BinaryDiagnostic(puzzleInput.inputTest);
            assert.equal(result, 1);
        });

    });

    describe('Binary Diagnostic2', function () {
        it('should return 230', function () {
            const input: string = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
            const result = binaryDiagnostic2.BinaryDiagnostic(input);
            assert.equal(result, 230);
        });

        it('should return ', function () {
            const result = binaryDiagnostic2.BinaryDiagnostic(puzzleInput.inputTest);
            assert.equal(result, 1);
        });

    });

});
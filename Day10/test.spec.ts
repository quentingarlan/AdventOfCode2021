const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Syntax Scoring1', function () {
        it('should return 26397', function () {
            const input: string = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;
            const result = Advent1.SyntaxScoring(input);
            assert.equal(result, 26397);
        });

        it('should return 399153', function () {
            const result = Advent1.SyntaxScoring(puzzleInput.inputTest);
            assert.equal(result, 399153);
        });

    });

    describe('Syntax Scoring2', function () {
        it('should return 288957', function () {
            const input: string = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;
            const result = Advent2.SyntaxScoring(input);
            assert.equal(result, 288957);
        });

        it('should return 2995077699', function () {
            const result = Advent2.SyntaxScoring(puzzleInput.inputTest);
            assert.equal(result, 2995077699);
        });

    });

});
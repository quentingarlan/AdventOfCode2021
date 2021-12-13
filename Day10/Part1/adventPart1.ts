const openings: string[] = ['(', '[', '{', '<'];

const closings: Map<string, string> = new Map([['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']]);
const closingScores: Map<string, number> = new Map([[')', 3], [']', 57], ['}', 1197], ['>', 25137]]);

export function SyntaxScoring(advList: string): number {
    let points = 0
    let syntaxLines: string[] = advList.split('\n')
    syntaxLines.forEach(line => {
        console.log("line", line)
        points += checkSyntax(line)
    })

    return points
}

function checkSyntax(line: string): number {
    let score = 0
    let stack: string[] = []
    for (let i = 0; i < line.length; i++) {
        if (openings.includes(line[i])) {
            stack.push(line[i])
        } else {
            let lastOpening = stack.pop();
            let expectedClosing = closings.get(lastOpening)
            if (expectedClosing !== line[i]) {
                console.log("espected", expectedClosing, "wrong closing ", line[i])
                const scoreOfFoundCharacter = closingScores.get(line[i])
                console.log("score", scoreOfFoundCharacter)
                return scoreOfFoundCharacter
            }
        }
    }
    return score;
}

const openings: string[] = ['(', '[', '{', '<'];

const closings: Map<string, string> = new Map([['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']]);
const closingScores: Map<string, number> = new Map([[')', 1], [']', 2], ['}', 3], ['>', 4]]);

export function SyntaxScoring(advList: string): number {
    let scores: number[] = []
    let syntaxLines: string[] = advList.split('\n')
    syntaxLines.forEach(line => {
        const score = checkSyntax(line)
        if (score != 0){
            scores.push(score)
        }
    })
    const sortedScores = scores.sort((n1,n2) => n1 - n2)
    console.log("sortedScores", sortedScores)
    return sortedScores[Math.round(scores.length / 2) - 1]
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
                return 0
            }
        }
    }
    const reversedStack = stack.reverse()
    reversedStack.forEach(elt =>{
        const missingClosing= closings.get(elt);
        score = score * 5 + closingScores.get(missingClosing)
    })
    return score;
}

export function HydrothermalVenture(advList: string): number {
    const input = advList.split('\n');
    let moves = getLines(input)
    const arrayLength = 1000
    let diagram = Array.from({ length: arrayLength }, () =>
        Array.from({ length: arrayLength }, () => 0)
    );
    let riskPoint = 0;
    moves.forEach(mov => {
        if (mov.line) {
            if (mov.x1 > mov.x2) {
                for (let j = mov.x1; j >= mov.x2; j--) {
                    diagram[mov.y1][j]++
                }
            } else {
                for (let i = mov.x1; i <= mov.x2; i++) {
                    diagram[mov.y1][i]++
                }
            }
        } else if (mov.column) {
            if (mov.y1 > mov.y2) {
                for (let i = mov.y1; i >= mov.y2; i--) {
                    diagram[i][mov.x1]++
                }
            } else {
                for (let j = mov.y1; j <= mov.y2; j++) {
                    diagram[j][mov.x1]++
                }
            }
        }
    })

    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (diagram[i][j] >= 2) {
                riskPoint++
            }
        }
    }

    return riskPoint
}

function getLines(input: string[]) {
    let moves: line[] = []
    input.forEach(elt => {
        const coordinates = elt.split('->')
        const beginning = coordinates[0].split(',')
        let currentLine: line = new line
        currentLine.x1 = parseInt(beginning[0])
        currentLine.y1 = parseInt(beginning[1])
        const end = coordinates[1].split(',')
        currentLine.x2 = parseInt(end[0])
        currentLine.y2 = parseInt(end[1])
        if (currentLine.x1 === currentLine.x2) {
            currentLine.column = true
        }
        if (currentLine.y1 === currentLine.y2) {
            currentLine.line = true
        }
        moves.push(currentLine)
    })
    return moves
}

class line {
    x1: number
    y1: number
    x2: number
    y2: number
    line: boolean
    column: boolean
}
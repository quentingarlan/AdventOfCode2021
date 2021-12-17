export function HydrothermalVenture(advList: string): number {
    const input = advList.split('\n');
    let moves = getLines(input)
    const arrayLength = 10
    let diagram = Array.from({ length: arrayLength }, () =>
        Array.from({ length: arrayLength }, () => 0)
    );

    moves.forEach(mov => {
        if (mov.line) {
            if (mov.x1 > mov.x2) {
                diagram = inceasingLine(diagram, mov)
            } else {
                diagram = decreasingLine(diagram, mov)
            }
        } else if (mov.column) {
            if (mov.y1 > mov.y2) {
                diagram = inceasingColumn(diagram, mov)
            } else {
                diagram = decreasingColumn(diagram, mov)
            }
        } else {
            //deal with diagonals
            if (mov.x1 > mov.x2) {
                if (mov.y1 > mov.y2) {
                    diagram = diagonalBottomRightDirection(diagram, mov, arrayLength)
                } else {
                    diagram = diagonalTopRightDirection(diagram, mov, arrayLength)
                }
            } else {
                if (mov.y1 > mov.y2) {

                } else {

                }
            }
        }
    })
    console.log(diagram)
    let riskPoint = calculateRisk(diagram, arrayLength);

    return riskPoint
}

function diagonalBottomRightDirection(diagram: number[][], mov: line, arrayLength: number) {
    for (let i = mov.x1; i >= mov.x2; i--) {
        for (let j = mov.y1; j >= mov.y2; j--) {
            if (i == j || (i + j) == (arrayLength - 1)) {
                console.log(diagram[i][j])
                diagram[i][j]++
            }
        }
    }
    return diagram
}
function diagonalTopRightDirection(diagram: number[][], mov: line, arrayLength: number) {
    for (let i = mov.x1; i >= mov.x2; i--) {
        for (let j = mov.y1; j <= mov.y2; j++) {
            if (i == j || (i + j) == (arrayLength - 1)) {
                console.log(diagram[i][j])
                diagram[i][j]++
            }
        }
    }
    return diagram
}
function inceasingLine(diagram: number[][], mov: line) {
    for (let i = mov.x1; i >= mov.x2; i--) {
        diagram[mov.y1][i]++
    }
    return diagram
}
function decreasingLine(diagram: number[][], mov: line) {
    for (let i = mov.x1; i <= mov.x2; i++) {
        diagram[mov.y1][i]++
    }
    return diagram
}
function inceasingColumn(diagram: number[][], mov: line) {
    for (let i = mov.y1; i >= mov.y2; i--) {
        diagram[i][mov.x1]++
    }
    return diagram
}
function decreasingColumn(diagram: number[][], mov: line) {
    for (let i = mov.y1; i <= mov.y2; i++) {
        diagram[i][mov.x1]++
    }
    return diagram
}

function calculateRisk(diagram: number[][], arrayLength: number) {
    let riskPoint = 0;
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
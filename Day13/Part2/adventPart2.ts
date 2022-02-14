export function TransparentOrigami(advList: string): number {
    const input: string[] = advList.split('\n\n')
    const dotPositions = input[0].split('\n')
    const foldInstructions = input[1]
    const allInstructions = foldInstructions.split('\n')
    let dotCanvas: number[][] = getDots(dotPositions)
    let maxX = dotCanvas.length
    let maxY = dotCanvas[0].length
    allInstructions.forEach(instr => {
        const foldValueString = instr.split("=")[1]
        const foldCoordString = instr.split("=")[0]
        const horizontal = foldCoordString.substring(foldCoordString.length - 1, foldCoordString.length)
        const foldValue = parseInt(foldValueString)
        if (horizontal == "y") {
            verticalFold(dotCanvas, foldValue)
            maxX = maxX / 2
        } else {
            horizontalFold(dotCanvas, foldValue)
            maxY = maxY / 2
        }

    })
    console.log(dotCanvas)
    let dotCount = countDots(dotCanvas, maxX, maxY)
    return dotCount
}

function verticalFold(dotCanvas: number[][], foldValue: number) {
    for (let i = foldValue - 1; i <= foldValue * 2; i++) {
        for (let j = 0; j < dotCanvas[0].length; j++) {
            if (dotCanvas[i][j] === 1) {
                dotCanvas[foldValue * 2 - i][j] = 1
            }
        }
    }
}

function horizontalFold(dotCanvas: number[][], foldValue: number) {
    for (let i = 0; i < dotCanvas.length; i++) {
        for (let j = foldValue - 1; j <= foldValue * 2; j++) {
            if (dotCanvas[i][j] === 1) {
                dotCanvas[i][foldValue * 2 - j] = 1
            }
        }
    }
}

function countDots(dotCanvas: number[][], maxX: number, maxY: number): number {
    let count = 0
    for (let i = 0; i < maxX; i++) {
        for (let j = 0; j < maxY; j++) {
            if (dotCanvas[i][j] === 1) {
                count++
            }
        }
    }
    return count
}

function getDots(dotPositions: string[]): number[][] {
    let positions: dotCoordinates[] = []
    let maxX = 0
    let maxY = 0
    dotPositions.forEach(dot => {
        const coord = dot.split(',')
        const x = parseInt(coord[0])
        const y = parseInt(coord[1])
        if (x > maxX) {
            maxX = x
        }
        if (y > maxY) {
            maxY = y
        }
        positions.push({ x: x, y: y })
    })

    const dots = Array.from({ length: maxY + 1 }, () =>
        Array.from({ length: maxX + 1 }, () => 0)
    );
    positions.forEach(pos => {
        dots[pos.y][pos.x] = 1
    })
    return dots
}

class dotCoordinates {
    x: number
    y: number
}

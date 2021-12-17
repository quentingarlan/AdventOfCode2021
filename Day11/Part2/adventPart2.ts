export function DumboOctopus(advList: string): number {
    let octopusLines: string[] = advList.split('\n')
    let octopusGrid: number[][] = []
    octopusLines.forEach(line => {
        const octopuses = line.split('').map(value => parseInt(value))
        octopusGrid.push(octopuses)
    })
    let allflashes = false
    let step = 0
    while (!allflashes) {
        for (let x = 0; x < octopusLines.length; x++) {
            for (let y = 0; y < octopusLines[0].length; y++) {
                octopusGrid[x][y]++
            }
        }
        checkFlashes(octopusGrid, octopusLines.length, octopusLines[0].length)
        allflashes = allFlashed(octopusGrid)
        step++
    }

    return step
}

function allFlashed(octopusGrid: number[][]): boolean {
    for (let x = 0; x < octopusGrid.length; x++) {
        for (let y = 0; y < octopusGrid[0].length; y++) {
            if (octopusGrid[x][y] !== 0) {
                return false
            }
        }
    }
    return true
}

let flashes = 0;

function checkFlashes(octopusGrid: number[][], columnLength: number, lineLength: number) {
    let flashing = false
    for (let x = 0; x < columnLength; x++) {
        for (let y = 0; y < lineLength; y++) {
            if (octopusGrid[x][y] >= 10) {
                octopusGrid[x][y] = 0;
                flashes++
                flashing = true
                // increment around flashing octopus
                if (x - 1 >= 0 && y - 1 >= 0 && octopusGrid[x - 1][y - 1] !== 0) {
                    octopusGrid[x - 1][y - 1]++
                }
                if (x - 1 >= 0 && octopusGrid[x - 1][y] !== 0) {
                    octopusGrid[x - 1][y]++
                }
                if (x - 1 >= 0 && y + 1 < columnLength && octopusGrid[x - 1][y + 1] !== 0) {
                    octopusGrid[x - 1][y + 1]++
                }
                if (y - 1 >= 0 && octopusGrid[x][y - 1] !== 0) {
                    octopusGrid[x][y - 1]++
                }
                if (y + 1 < columnLength && octopusGrid[x][y + 1] !== 0) {
                    octopusGrid[x][y + 1]++
                }
                if (x + 1 < lineLength && y - 1 >= 0 && octopusGrid[x + 1][y - 1] !== 0) {
                    octopusGrid[x + 1][y - 1]++
                }
                if (x + 1 < lineLength && octopusGrid[x + 1][y] !== 0) {

                    octopusGrid[x + 1][y]++
                }
                if (x + 1 < lineLength && y + 1 < columnLength && octopusGrid[x + 1][y + 1] !== 0) {
                    octopusGrid[x + 1][y + 1]++
                }
            }
        }
    }
    if (flashing) {
        checkFlashes(octopusGrid, columnLength, lineLength)
    }
}

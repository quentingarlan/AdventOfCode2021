export function SmokeBasin(advList: string): number {
    let positionLines: string[] = advList.split('\n')
    let riskLevel = 0;
    for (let y = 0; y < positionLines.length; y++) {
        let positionsYminus: string[] = []
        if (positionLines[y - 1]) {
            positionsYminus = positionLines[y - 1].split('')
        } else {
            positionsYminus = new Array(positionLines[y].length).fill("9")
        }
        let positionsY = positionLines[y].split('')
        let positionsYMaxus: string[] = []
        if (positionLines[y + 1]) {
            positionsYMaxus = positionLines[y + 1].split('')
        } else {
            positionsYMaxus = new Array(positionLines[y].length).fill("9")
        }
        for (let x = 0; x < positionsY.length; x++) {
            let leftPositionSuperior = parseInt(positionsY[x]) < parseInt(positionsY[x - 1]) || !positionsY[x - 1]
            let rightPositionSuperior = parseInt(positionsY[x]) < parseInt(positionsY[x + 1]) || !positionsY[x + 1]
            let topPositionSuperior = parseInt(positionsY[x]) < parseInt(positionsYminus[x])
            let bottomPositionSuperior =parseInt(positionsY[x]) < parseInt(positionsYMaxus[x])
            if (leftPositionSuperior && rightPositionSuperior && topPositionSuperior && bottomPositionSuperior) {
                riskLevel +=  parseInt(positionsY[x]) + 1
            }
        }
    }
    return riskLevel
}
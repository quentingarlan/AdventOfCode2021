export function SmokeBasin(advList: string): number {
    let positionLines: string[] = advList.split('\n')
    let bassins: number[] = [];
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
            let bottomPositionSuperior = parseInt(positionsY[x]) < parseInt(positionsYMaxus[x])
            if (leftPositionSuperior && rightPositionSuperior && topPositionSuperior && bottomPositionSuperior) {
                let bassinTotalSize = 0;
                let leftBasinSize = 0
                let rightBasinSize = 0
                let topBasinSize = 0
                let bottomBasinSize = 0

                let horizontalRef = x;
                let verticalRef = x;
                console.log('positionsY[horizontalRef]', positionsY[horizontalRef])
                console.log('positionsY[horizontalRef- 1]', positionsY[horizontalRef- 1])
                while (positionsY[horizontalRef] && parseInt(positionsY[horizontalRef]) < 9) {
                    leftBasinSize++
                    horizontalRef--
                }          
                while (positionsY[horizontalRef] && parseInt(positionsY[horizontalRef]) < 9) {
                    rightBasinSize++
                    horizontalRef++
                }
                while(positionsYminus[verticalRef] && parseInt(positionsYminus[verticalRef]) < 9){
                    if (positionLines[verticalRef - 1]) {
                        positionsYminus = positionLines[verticalRef - 1].split('')
                    } else {
                        positionsYminus = new Array(positionLines[verticalRef]?.length).fill("9")
                    }
                    bottomBasinSize++
                    verticalRef--
                }
                while(positionsYMaxus[verticalRef] && parseInt(positionsYMaxus[verticalRef]) < 9){
                    if (positionLines[verticalRef + 1]) {
                        positionsYMaxus = positionLines[verticalRef + 1].split('')
                    } else {
                        positionsYMaxus = new Array(positionLines[verticalRef]?.length).fill("9")
                    }
                    topBasinSize++
                    verticalRef++
                }
                bassinTotalSize = leftBasinSize + rightBasinSize + topBasinSize + bottomBasinSize
                bassins.push(bassinTotalSize)
            }
        }
    }
    console.log(bassins)
    const res = getThreeLargestMultiplied(bassins);
    console.log(res)
    return res
}

function getThreeLargestMultiplied(input: number[]): number {
    let first, second, third = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] > first) {
            third = second;
            second = first;
            first = input[i];
        }

        else if (input[i] > second) {
            third = second;
            second = input[i];
        }

        else if (input[i] > third)
            third = input[i];
    }
    console.log("first", first)
    console.log("second", second)
    console.log("third", third)
    return first * second * third;
}
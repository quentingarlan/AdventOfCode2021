export function TreacheryOfWhales(advList: string): number {
    let positions: number[] = advList.split(',').map(value => { return parseInt(value) });
    let sortedPos = positions.sort((n1, n2) => n1 - n2)

    let bestPosition = GetBestPosition(sortedPos)

    return bestPosition;
}

function GetBestPosition(input: number[]): number {
    let bestPosition = Number.MAX_SAFE_INTEGER;
    let possibleBestPositions = new Map<number, number[]>()
    let maxPosition = 0;
    for (let i= 0; i<input.length; i++) {
        if (input[i + 1] > input[i]) {
            maxPosition = input[i + 1];
        }
    }

    for (let i = 0; i < maxPosition / 2; i++) {
        let values: number[] = []
        input.forEach(elt => {
            let diff = Math.abs(elt - i)
            let burningCost = GetFuelBurningCost(diff)
            values.push(burningCost)
        })
        possibleBestPositions.set(i, values)
    }

    possibleBestPositions.forEach((value, key)=>{
        let totalValues = 0;
        value.forEach(elt =>{
            totalValues += elt;
        })
        if (totalValues < bestPosition){
            bestPosition = totalValues;
        }
    })  
    return bestPosition;
}

function GetFuelBurningCost(diff: number){
    let burningCost = 0;
    for (let i=1; i<diff + 1; i++){
        burningCost+=i
    }
    return burningCost
}
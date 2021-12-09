export function TreacheryOfWhales(advList: string): number {
    let positions: number[] = advList.split(',').map(value => { return parseInt(value) });
    let sortedPos = positions.sort((n1, n2) => n1 - n2)

    let bestPosition = Median(sortedPos)
    console.log(bestPosition)
    let fuelCount = 0;
    positions.forEach(pos => {
        fuelCount += Math.abs(pos - bestPosition)
    })
    return fuelCount;
}

function Median(input: number[]): number {
    let median = 0;
    let arrayLength = input.length;
    let arrayLengthIsEven = arrayLength % 2 == 0 ? true : false;
    if (arrayLengthIsEven) {
        median = input[arrayLength / 2]
    } else {
        median = input[arrayLength / 2] - input[arrayLength / 2 - 1]
    }
    return median;
}
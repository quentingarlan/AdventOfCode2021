export function Lanternfish(advList: string): number {
    let fishList: number[] = advList.split(',').map(value => { return parseInt(value) });
    let fishCounter: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i in fishList) {
            fishCounter[i]++;
    }
    console.log(fishCounter)
    for (let i = 0; i < 256; i++) {
        fishCounter[9] = fishCounter[0];
        fishCounter[7] += fishCounter[0];
        for (let j = 0; j < fishCounter.length - 1; j++) {
            fishCounter[j] = fishCounter[j + 1];
        }
    }
    console.log(fishCounter)
    let sum: number = 0;
    for (let i = 0; i < 9; i++) {
        sum += fishCounter[i];
    }

    return sum;
}

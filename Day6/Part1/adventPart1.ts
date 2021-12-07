export function Lanternfish(advList: string): number {
    let fishList: number[] = advList.split(',').map(value => { return parseInt(value) });
    for (let i = 0; i < 80; i++) {
        for (let j = 0; j < fishList.length; j++) {
            if (fishList[j] > 0) {
                fishList[j]--;
            } else {
                fishList[j] = 6;
                fishList.push(9); // we add a fresh fish with a full timer
            }
        }
    }

    return fishList.length;
}

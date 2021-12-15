export function ExtendedPolymerization(advList: string): number {
    const input: string[] = advList.split('\n')
    const nbOfSteps = 40;
    let polymer = input[0]
    let rules: Map<string, string> = new Map<string, string>();
    let occurenceCount: Map<string, number> = new Map<string, number>();
    for (let i = 2; i < input.length; i++) {
        const rule = input[i].split('->')
        rules.set(rule[0].trim(), rule[1].trim())
        occurenceCount.set(rule[1].trim(), 0)
    }

    // add occurences in original string
    for (let i = 0; i < polymer.length; i++) {
        occurenceCount.set(polymer[i], occurenceCount.get(polymer[i]) + 1)
    }

    for (let i = 0; i < nbOfSteps; i++) {
        let newPolymer = polymer[0]
        for (var j = 1; j < polymer.length; j++) {

            let pairOfLetter = polymer.substring(j - 1, j + 1)
            const letterToAdd = rules.get(pairOfLetter)
            if (letterToAdd) {
                newPolymer += letterToAdd
                occurenceCount.set(letterToAdd, occurenceCount.get(letterToAdd) + 1)
                newPolymer += polymer[j]
            }
        }
        polymer = newPolymer
    }
    let minMax = getMinAndMax(occurenceCount)

    return minMax.max - minMax.min
}

function getMinAndMax(occurenceCount: Map<string, number>): { min: number, max: number } {
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    occurenceCount.forEach((value: number) => {
        if (value > max) {
            max = value
        }
        if (value < min) {
            min = value
        }
    })
    return { min: min, max: max }
}

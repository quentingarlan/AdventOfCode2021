export function PassagePathing(advList: string): number {
    let caveMap: string[] = advList.split('\n')
    let passages: Map<string, string[]> = getNodesFromCaveMap(caveMap)
    console.log(passages)
    let pathCount = visitCaveMap(passages)
    return pathCount
}

// DFS approach
function visitCaveMap(passages: Map<string, string[]>): number {
    let paths: string[] = []
    let visitedPaths: string[] = []
    paths.push("start")
    let pathCounter = 0
    while (paths.length > 0) {
        let node = paths.pop()
        visitedPaths.push(node)
        const childNodes = passages.get(node)
        console.log("childNodes", childNodes)
        if (childNodes) {
            childNodes.forEach(elt => {
                console.log("edlt", elt)
                console.log("elt.toUpperCase()", elt.toUpperCase())
                if (elt.toUpperCase() != elt) {
                        return;
                }
                else if (!visitedPaths.includes(elt)) {
                    console.log("!visitedPaths.includes(elt", elt)
                    if (elt === "end") {
                        pathCounter++
                        return elt
                    } else {
                        paths.push(elt)
                        console.log("pathCounter", pathCounter)
                        pathCounter++
                    }
                }
            })
        }

    }

    return pathCounter
}

function isVisited(node: string, visitedNodes: string[]): boolean {
    let res = false
    visitedNodes.forEach(elt => {
        if (elt === node) {
            res = true;
        }
    })
    console.log("res", res)
    return res;
}

function getNodesFromCaveMap(caveMap: string[]): Map<string, string[]> {
    let passages: Map<string, string[]> = new Map<string, string[]>()
    caveMap.forEach(cave => {
        const caveValues = cave.split('-')
        if (passages.has(caveValues[0])) {
            const alreadyAddedNodes = passages.get(caveValues[0])
            alreadyAddedNodes.push(caveValues[1])
            passages.set(caveValues[0], alreadyAddedNodes)
        } else {
            passages.set(caveValues[0], [caveValues[1]])
        }
    })
    return passages
}
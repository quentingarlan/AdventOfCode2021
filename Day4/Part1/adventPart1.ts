export function GiantSquid(advList: string): number {
    const input = advList.split('\n\n');

    const drawOrder: number[] = input[0].split(',').map(x => parseInt(x));
    console.log('drawOrder', drawOrder)

    // Create bingo cards
    const bingoCards = input.slice(1).map(x => parseBingoCards(x.split('\n')));

    let res = GetWinningCard(drawOrder, bingoCards)
    let unmarkedNb = 0
    res.winningCard.forEach(line => {
        line.forEach(cell => {
            if (cell.validated === false) {
                unmarkedNb += cell.value
            }
        })
    })
    return res.lastDraw * unmarkedNb;
}

function GetWinningCard(drawOrder: number[], bingoCards: bingoCardCell[][][]): { winningCard: bingoCardCell[][], lastDraw: number } {
    let res: bingoCardCell[][]
    let resFound = false
    let lastDraw = 0;
    drawOrder.forEach(draw => {
        if (resFound) {
            return
        }
        bingoCards.forEach(card => {
            if (resFound) {
                return
            }
            for (let i = 0; i < card[0].length; i++) {
                if (resFound) {
                    break
                }
                // validate cell
                for (let j = 0; j < card[0].length; j++) {
                    if (card[i][j].value == draw) {
                        card[i][j].validated = true;
                    }
                    // check column
                    for (let k = 0; k < 5; k++) {
                        if (card[k][0].validated && card[k][1].validated && card[k][2].validated && card[k][3].validated && card[k][4].validated) {
                            console.log('correct column', k)
                            res = card
                            lastDraw = draw
                            resFound = true
                            break
                        }
                        // check line
                        if (card[0][k].validated && card[1][k].validated && card[2][k].validated && card[3][k].validated && card[4][k].validated) {
                            console.log('correct line', k)
                            res = card
                            lastDraw = draw
                            resFound = true
                            break
                        }
                    }
                }
            }
        })
    })
    return { winningCard: res, lastDraw: lastDraw }
}


function parseBingoCards(input: string[]): bingoCardCell[][] {
    let res: bingoCardCell[][] = []
    input.forEach(line => {
        const numbers = line.split(' ')
        let nbLine: bingoCardCell[] = []
        numbers.forEach(nb => {
            const realNb = parseInt(nb)
            if (!isNaN(realNb)) {
                let cell = new bingoCardCell
                cell.value = realNb
                cell.validated = false
                nbLine.push(cell)
            }
        })
        res.push(nbLine)
    })
    return res
}

class bingoCardCell {
    value: number
    validated: boolean
}

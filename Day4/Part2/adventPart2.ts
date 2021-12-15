export function GiantSquid(advList: string): number {
    const input = advList.split('\n\n');

    const drawOrder: number[] = input[0].split(',').map(x => parseInt(x));
    console.log('drawOrder', drawOrder)

    // Create bingo cards
    const bingoCards = input.slice(1).map(x => parseBingoCards(x.split('\n')));

    let res = GetLastWinningCard(drawOrder, bingoCards)
    let unmarkedNb = 0
    res.winningCard.cells.forEach(line => {
        line.forEach(cell => {
            if (cell.valid === false) {
                unmarkedNb += cell.value
            }
        })
    })
    console.log('res.lastDraw ', res.lastDraw )
    console.log('unmarkedNb ', unmarkedNb)
    return res.lastDraw * unmarkedNb;
}

function GetLastWinningCard(drawOrder: number[], bingoCards: BingoCard[]): { winningCard: BingoCard, lastDraw: number } {
    let res: BingoCard
    let lastDraw = 0;
    drawOrder.forEach(draw => {
        console.log('draw', draw)
        bingoCards.forEach(card => {
            if (card.valid){
                return
            }
            for (let i = 0; i < card.cells[0].length; i++) {
                // validate cell
                for (let j = 0; j < card.cells[0].length; j++) {
                    if (card.cells[i][j].value == draw) {
                        card.cells[i][j].valid = true;
                    }
                    // check column
                    for (let k = 0; k < 5; k++) {
                        if (card.cells[k][0].valid && card.cells[k][1].valid && card.cells[k][2].valid && card.cells[k][3].valid && card.cells[k][4].valid) {
                            console.log('correct column', k)
                            res = card
                            lastDraw = draw
                            card.valid = true
                        }
                        // check line
                        if (card.cells[0][k].valid && card.cells[1][k].valid && card.cells[2][k].valid && card.cells[3][k].valid && card.cells[4][k].valid) {
                            console.log('correct line', k)
                            res = card
                            lastDraw = draw
                            card.valid = true
                        }
                    }
                }
            }
        })
    })
    return { winningCard: res, lastDraw: lastDraw }
}


function parseBingoCards(input: string[]): BingoCard {
    let res: bingoCardCell[][] = []
    input.forEach(line => {
        const numbers = line.split(' ')
        let nbLine: bingoCardCell[] = []
        numbers.forEach(nb => {
            const realNb = parseInt(nb)
            if (!isNaN(realNb)) {
                let cell = new bingoCardCell
                cell.value = realNb
                cell.valid = false
                nbLine.push(cell)
            }
        })
        res.push(nbLine)
    })
    return {valid: false, cells:res}
}

class BingoCard{
    valid:boolean
    cells:bingoCardCell[][]
}

class bingoCardCell {
    value: number
    valid: boolean
}

export function GiantSquid(advList: string): number {
    const input = advList.split('\n\n');

    const drawOrder: number[] = input[0].split(',').map(x => parseInt(x));
    console.log('drawOrder', drawOrder)

    // Create bingo cards
    const bingosCards = input.slice(1).map(x => parseBingoCards(x.split('\n')));
    console.log('bingosCards', bingosCards)

    return 0;
}

function parseBingoCards(input: string[]) {
    const numbers = new Map<number, number[]>();
    console.log('input', input)
    const puzzle = input.map((line, lineIndex) =>
        line
            .trim()
            .split(/\s+/)
            .map((char, charIndex) => {
                const number = parseInt(char);
                numbers.set(number, [lineIndex, charIndex]);
                return number;
            }),
    );

    return { puzzle, numbers };
}

interface Bingo {
    card: number[][];
    numbers: Map<number, number[]>;
  }
export function Dive(advList: string): number {
    const Instructions = advList.split('\n');
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    Instructions.forEach(elt => {
        const instr = elt.split(' ');
        const direction = instr[0];
        const value = parseInt(instr[1]);
        switch (direction) {
            case "forward": {
                horizontalPosition += value;
                depth += aim *value;
                break;
            }
            case "down": {
                aim += value;
                break;
            }
            case "up": {
                aim -= value;
                break;
            }
            default: {
                break;
            }
        }
        // console.log('instr', instr, 'horizontalPosition', horizontalPosition, 'depth', depth,'aim', aim)
    })
    return horizontalPosition * depth;
}



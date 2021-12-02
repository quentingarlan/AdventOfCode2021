export function Dive(advList: string): number {
    const Instructions = advList.split('\n');
    let horizontalPosition = 0;
    let depth = 0;
    Instructions.forEach(elt => {
        const instr = elt.split(' ');
        const direction = instr[0];
        const value = parseInt(instr[1]);
        switch (direction) {
            case "forward": {
                horizontalPosition += value;
                break;
            }
            case "down": {
                depth += value;
                break;
            }
            case "up": {
                depth -= value;
                break;
            }
            default: {
                break;
            }
        }
    })
    return horizontalPosition * depth;
}



export function BinaryDiagnostic(advList: string): number {
    const reports = advList.split('\n');
    const bitCount: number[] = [];
    reports.forEach(elt => {
        for (let i=0; i< elt.length; i++){
          
            const nb:number = parseInt(elt[i]);
            bitCount[i] =  bitCount[i] !== undefined ? bitCount[i] + nb : nb;
        }
    })
    const halfReportLength = reports.length / 2;

    const gammaRateBinary = GetGammaRate(bitCount, halfReportLength);
    console.log('gammaRateBinary',gammaRateBinary)

    const epsilonRateBinary = GetEpsilonRate(bitCount, halfReportLength);
    console.log('epsilonRateBinary',epsilonRateBinary)

    const gammaRate = binaryToInteger(gammaRateBinary);
    console.log('gammaRate',gammaRate)
    
    const epsilonRate = binaryToInteger(epsilonRateBinary);
    console.log('epsilonRate',epsilonRate)

    return gammaRate * epsilonRate;
}

function binaryToInteger(binary: number[]):number{
    let result = 0;
    binary.forEach(elt =>{
        result = (result << 1) | elt
    })
    return result;
}

function GetGammaRate(bitCount: number[], halfReportLength:number): number[] {
    let gammaRate: number[] = [];
    bitCount.forEach(elt => {
        // if the added numbers are more than half it is the most common bit
        if (elt > halfReportLength){
            gammaRate.push(1)
        }else{
            gammaRate.push(0)
        }
    })
    return gammaRate;
}

function GetEpsilonRate(bitCount: number[], halfReportLength:number): number[] {
    let epsilonRate: number[]= [];
    bitCount.forEach(elt => {
        // if the added numbers are less than half it is the most common bit
        if (elt < halfReportLength){
            epsilonRate.push(1)
        }else{
            epsilonRate.push(0)
        }
    })
    return epsilonRate;
}
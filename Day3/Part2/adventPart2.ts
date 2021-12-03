export function BinaryDiagnostic(advList: string): number {
    let reports = advList.split('\n');

    const oxygenRatingBinary = GetOxygenGeneratorRating(reports);
    const oxygenRatingArray = Array.from(oxygenRatingBinary);
    const oxygenRatingDecimal = binaryToInteger(oxygenRatingArray)

    const CO2ScrubberRatingBinary = GetCO2ScrubberRating(reports);
    const CO2ScrubberRatingArray = Array.from(CO2ScrubberRatingBinary);
    const CO2ScrubberRatingDecimal = binaryToInteger(CO2ScrubberRatingArray)

    return CO2ScrubberRatingDecimal * oxygenRatingDecimal;
}

function GetOxygenGeneratorRating(reports: string[]): string {
    let correctReports: string[] = reports;
    for (let i = 0; i < reports.length; i++) {
        let mostCommonBit = GetMostCommon(correctReports, i)
        correctReports = correctReports.filter((report) => parseInt(report[i]) === mostCommonBit);
        if (correctReports.length === 1) {
            break;
        }
    }
    return correctReports[0];
}

function GetMostCommon(reports: string[], index: number): number {
    let bitCount: number = 0;
    reports.forEach(elt => {
        if (parseInt(elt[index]) === 1) {
            bitCount++;
        }
    })
    if (bitCount >= reports.length / 2) {
        return 1;
    } else {
        return 0;
    }
}

function GetCO2ScrubberRating(reports: string[]): string {
    let correctReports: string[] = reports;
    for (let i = 0; i < reports.length; i++) {
        let leastCommonBit = GetLeastCommon(correctReports, i)
        correctReports = correctReports.filter((report) => parseInt(report[i]) === leastCommonBit);
        if (correctReports.length === 1) {
            break;
        }
    }
    return correctReports[0];
}

function GetLeastCommon(reports: string[], index: number): number {
    let bitCount: number = 0;
    reports.forEach(elt => {
        if (parseInt(elt[index]) === 0) {
            bitCount++;
        }
    })
    if (bitCount <= reports.length / 2) {
        return 0;
    } else {
        return 1;
    }
}


function binaryToInteger(binary: string[]): number {
    let result = 0;
    binary.forEach(elt => {
        result = (result << 1) | parseInt(elt)
    })
    return result;
}


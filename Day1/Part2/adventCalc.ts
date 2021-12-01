export function SonarSweep(advList: string[]): number {
  let count = 0;
  let previousWindow = 0;
  let currentWindow = 0;
  for (let i = 0; i < advList.length + 1; i++) {
    let beforePreviousNb = parseInt(advList[i - 2]);
    let previousNb = parseInt(advList[i - 1]);
    let currentNb = parseInt(advList[i]);
    let nextNb = parseInt(advList[i + 1]);
    previousWindow = beforePreviousNb + previousNb + currentNb;
    currentWindow = previousNb + currentNb + nextNb;

    if (currentWindow > previousWindow) {
      count++;
    }
  }
  return count;
}



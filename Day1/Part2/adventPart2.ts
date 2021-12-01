export function SonarSweep(advList: number[]): number {
  let count = 0;
  let previousWindow = 0;
  let currentWindow = 0;
  for (let i = 0; i < advList.length + 1; i++) {
    let beforePreviousNb = advList[i - 2];
    let previousNb = advList[i - 1];
    let currentNb = advList[i];
    let nextNb = advList[i + 1];
    previousWindow = beforePreviousNb + previousNb + currentNb;
    currentWindow = previousNb + currentNb + nextNb;

    if (currentWindow > previousWindow) {
      count++;
    }
  }
  return count;
}



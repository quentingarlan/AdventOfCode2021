export function SonarSweep(advList: string[]): number {
  let count =0;
  for (let i=0;i< advList.length + 1; i++){
    if (parseInt(advList[i])> parseInt(advList[i - 1])){
      count++;
    }
  }
  return count;
}



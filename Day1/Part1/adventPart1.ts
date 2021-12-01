export function SonarSweep(advList: number[]): number {
  let count =0;
  for (let i=0;i< advList.length + 1; i++){
    if (advList[i]> advList[i - 1]){
      count++;
    }
  }
  return count;
}



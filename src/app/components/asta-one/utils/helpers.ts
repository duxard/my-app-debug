export function increaseValueTimes(val: number , times: number): number {
  let res = val;
  for (let i=0; i<=times;i++) {
    res++;
  }
  return res;
}

export function processValue(val: number): Promise<number> {
  return new Promise(resolve => {
    val*=10;
    resolve(val);
  });
}



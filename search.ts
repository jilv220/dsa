export function binarySearch(arr: number[], n: number) {
  let lo = 0;
  let hi = arr.length - 1;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = arr[m];

    if (v === n) {
      return m;
    } else if (v > n) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return -1;
}

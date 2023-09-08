function partition(arr: number[], lo: number, hi: number): number {
  const m = Math.floor((lo + hi) / 2);
  const pivot = arr[m];
  let i = lo - 1;
  let j = hi + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx);
  qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}

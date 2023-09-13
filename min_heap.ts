export default class MinHeap {
  public length: number;
  private arr: number[];

  constructor() {
    this.length = 0;
    this.arr = new Array(this.length);
  }

  insert(value: number): void {
    this.length++;
    this.arr.push(value);
    // bubble up
    let currIdx = this.length - 1;
    let parentIdx = this.parent(currIdx);
    while (true) {
      if (value < this.arr[parentIdx]) {
        let tmp = this.arr[parentIdx];
        this.arr[parentIdx] = this.arr[currIdx];
        this.arr[currIdx] = tmp;

        currIdx = parentIdx;
        parentIdx = this.parent(parentIdx);
      } else {
        break;
      }
    }
  }
  delete(): number | undefined {
    // swap bottom with root
    this.swap(0, this.length - 1);
    const toDelete = this.arr.pop();
    this.length = Math.max(0, this.length - 1);

    // bubble down
    let currIdx = 0;
    let childIdx = undefined;

    while (currIdx !== this.length - 1) {
      const leftChildIdx = this.leftChild(currIdx);
      const rightChildIdx = this.rightChild(currIdx);
      if (this.arr[leftChildIdx] === undefined) {
        childIdx = rightChildIdx;
      } else if (this.arr[rightChildIdx] === undefined) {
        childIdx = leftChildIdx;
      } else if (this.arr[leftChildIdx] < this.arr[rightChildIdx]) {
        childIdx = leftChildIdx;
      } else {
        childIdx = rightChildIdx;
      }
      if (childIdx > this.length) {
        break;
      }
      this.swap(currIdx, childIdx);
      currIdx = childIdx;
    }
    return toDelete;
  }
  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private leftChild(idx: number): number {
    return 2 * idx + 1;
  }
  private rightChild(idx: number): number {
    return 2 * idx + 2;
  }
  private swap(aIdx: number, bIdx: number) {
    let tmp = this.arr[bIdx];
    this.arr[bIdx] = this.arr[aIdx];
    this.arr[aIdx] = tmp;
  }
}

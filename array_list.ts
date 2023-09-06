import { List } from "./global.ts";

export default class ArrayList<T> implements List<T> {
  public length: number;
  private capacity: number;
  private arr: (T | undefined)[];

  constructor(length: number) {
    this.length = 0;
    this.capacity = 2 * length;

    // let's pretend this cannot resize???
    this.arr = new Array(this.capacity);
  }

  prepend(item: T): void {
    this.insertAt(item, 0);
  }
  insertAt(item: T, idx: number): void {
    if (this.length + 1 > this.capacity) {
      this.resize();
    }
    for (let i = this.length - 1; i >= idx; i--) {
      this.arr[i + 1] = this.arr[i];
    }
    this.arr[idx] = item;
    this.length++;
  }
  append(item: T): void {
    if (this.length + 1 > this.capacity) {
      this.resize();
    }
    this.arr[this.length] = item;
    this.length++;
  }
  remove(item: T): T | undefined {
    for (let i = 0; i < this.length; i++) {
      if (this.arr[i] === item) {
        this.removeAt(i);
        return item;
      }
    }
    return undefined;
  }
  get(idx: number): T | undefined {
    return this.arr[idx];
  }
  removeAt(idx: number): T | undefined {
    const item = this.arr[idx];
    this.arr[idx] = undefined;
    for (let i = idx; i < this.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.length--;
    return item;
  }

  private resize(): void {
    const newArr = new Array(this.capacity * 2);
    for (let i = 0; i < this.arr.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }
}

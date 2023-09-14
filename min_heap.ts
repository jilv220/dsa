export default class MinHeap {
  public length: number;
  private heapArray: number[];

  constructor() {
    this.length = 0;
    this.heapArray = new Array(this.length);
  }

  // Insert a value into the heap and maintain the min heap property
  insert(value: number): void {
    this.length++;
    this.heapArray.push(value);
    this.bubbleUp(this.length - 1);
  }

  // Delete the minimum value from the heap and maintain the min heap property
  delete(): number | undefined {
    if (this.length === 0) {
      return undefined;
    }

    // Swap the root with the last element in the heap
    this.swap(0, this.length - 1);
    const minValue = this.heapArray.pop();
    this.length = Math.max(0, this.length - 1);

    // Bubble down the root element to restore the min heap property
    this.bubbleDown(0);

    return minValue;
  }

  // Move the element at the given index up in the heap until it's in the correct position
  private bubbleUp(index: number): void {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);

    while (
      currentIndex > 0 &&
      this.heapArray[currentIndex] < this.heapArray[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }

  // Move the element at the root down in the heap until it's in the correct position
  private bubbleDown(index: number): void {
    let currentIndex = index;
    let smallestChildIndex = this.findSmallestChildIndex(currentIndex);

    while (
      smallestChildIndex < this.length &&
      this.heapArray[currentIndex] > this.heapArray[smallestChildIndex]
    ) {
      this.swap(currentIndex, smallestChildIndex);
      currentIndex = smallestChildIndex;
      smallestChildIndex = this.findSmallestChildIndex(currentIndex);
    }
  }

  // Find the parent index of the given index
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Find the left child index of the given index
  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  // Find the right child index of the given index
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  // Find the index of the smallest child of the given index
  private findSmallestChildIndex(index: number): number {
    const leftChildIndex = this.leftChild(index);
    const rightChildIndex = this.rightChild(index);

    if (rightChildIndex >= this.length) {
      return leftChildIndex;
    }

    return this.heapArray[leftChildIndex] < this.heapArray[rightChildIndex]
      ? leftChildIndex
      : rightChildIndex;
  }

  // Swap two elements in the heapArray
  private swap(aIndex: number, bIndex: number): void {
    const temp = this.heapArray[bIndex];
    this.heapArray[bIndex] = this.heapArray[aIndex];
    this.heapArray[aIndex] = temp;
  }
}

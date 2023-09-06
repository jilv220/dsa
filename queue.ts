type QNode<T> = {
  val: T;
  next?: QNode<T>;
};

export default class Queue<T> {
  public length: number;

  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode: QNode<T> = {
      val: item,
    };
    this.length++;

    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;

    // Don't forget to clean up when the queue got emptied
    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.val;
  }
  peek(): T | undefined {
    return this.head?.val;
  }
}

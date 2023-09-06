type SNode<T> = {
  val: T;
  prev?: SNode<T>;
};

export default class Stack<T> {
  public length: number;

  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode: SNode<T> = {
      val: item,
    };
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.prev = this.head;
    this.head = newNode;
  }
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (!this.head) {
      const head = this.head;
      this.head = undefined;
      return head;
    }

    const head = this.head;
    this.head = head.prev;
    return head.val;
  }
  peek(): T | undefined {
    return this.head?.val;
  }
}

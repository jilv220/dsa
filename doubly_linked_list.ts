type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  prepend(item: T): void {
    this.length += 1;
    const newNode: Node<T> = {
      value: item,
    };

    // length 0
    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.prev = undefined;
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      return;
    }
    if (idx === 0) {
      this.prepend(item);
      return;
    }
    if (idx === this.length) {
      this.append(item);
      return;
    }

    this.length++;
    let newNode: Node<T> = {
      value: item,
    };

    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }

    let prev = curr!.prev;
    curr!.prev = newNode;
    newNode.next = curr;

    newNode.prev = prev;
    prev!.next = newNode;
  }
  append(item: T): void {
    this.length++;
    const newNode: Node<T> = {
      value: item,
    };

    // length 0
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // get tail
    let tail = this.head as Node<T> | undefined;
    while (tail?.next !== undefined) {
      tail = tail.next;
    }

    newNode.prev = tail;
    tail!.next = newNode;
  }
  remove(item: T): T | undefined {
    this.length = Math.max(0, this.length - 1);
    // length 0
    if (!this.head) {
      return this.head;
    }
    let curr = this.head;
    while (curr?.next !== undefined) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }

    // not found
    if (curr.value !== item && curr.next === undefined) {
      return undefined;
    }

    // if length 1
    if (
      curr.value === item &&
      curr.prev === undefined &&
      curr.next === undefined
    ) {
      const curr = this.head;
      this.head = undefined;
      return curr.value;
    }

    // if head
    if (curr.value === item && curr.prev === undefined) {
      const next = curr.next;
      next!.prev = undefined;
      curr.next = undefined;
      this.head = next;

      return curr.value;
    }

    // if tail
    if (curr.value === item && curr.next === undefined) {
      const prev = curr.prev;
      prev!.next = undefined;
      curr.prev = undefined;

      return curr.value;
    }

    // normal
    const prev = curr.prev;
    const next = curr.next;
    prev!.next = next;
    next!.prev = prev;

    return curr.value;
  }
  get(idx: number): T | undefined {
    let curr: Node<T> | undefined = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }

    return curr?.value;
  }
  removeAt(idx: number): T | undefined {
    const toRemove = this.get(idx);
    //console.log(toRemove)
    if (toRemove) {
      this.remove(toRemove);
    }
    return toRemove;
  }
}

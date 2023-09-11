import { expect, test } from "bun:test";
import DoublyLinkedList from "../doubly_linked_list";
import { test_list } from "./list_test";
import { argv0 } from "process";


test("Doubly simple get", () => {
    const list = new DoublyLinkedList<number>();
    expect(list.get(0)).toBe(undefined)
    expect(list.get(1)).toBe(undefined)

    list.prepend(5);
    expect(list.get(0)).toBe(5);
})

test("Doubly simple prepend", () => {
    const list = new DoublyLinkedList<number>();
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);
    expect(list.get(2)).toBe(5);
})

test("Doubly insertAt", () => {
    const list = new DoublyLinkedList<number>();
    list.insertAt(5, 0);
    expect(list.get(0)).toBe(5);

    list.insertAt(7, 0);
    expect(list.get(0)).toBe(7);

    list.insertAt(9, 2);
    expect(list.get(2)).toBe(9);

    list.insertAt(11, 2);
    expect(list.get(2)).toBe(11);
})

test("DoublyLinkedList", () => {
    const list = new DoublyLinkedList<number>();
    test_list(list);
});

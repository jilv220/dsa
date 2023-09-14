import Trie from "../trie";
import { expect, test } from "bun:test";

test("Trie:", function () {
  const trie = new Trie();
  trie.insert("foo");
  trie.insert("fool");
  trie.insert("foolish");
  trie.insert("bar");

  expect(trie.find("fo").sort()).toEqual(["foo", "fool", "foolish"]);

  trie.delete("fool");
  expect(trie.find("fo").sort()).toEqual(["foo", "foolish"]);

  trie.insert("fool");
  trie.delete("foo");
  expect(trie.find("fo").sort()).toEqual(["fool", "foolish"]);
});

test("Trie: should delete subnodes", () => {
  const trie = new Trie();
  trie.insert("foo");
  trie.insert("fool");
  trie.insert("foolish");
  trie.delete("foolish");
  expect(trie.find("fo").sort()).toEqual(["foo", "fool"]);
});

test("Trie: Prefix?", () => {
  const trie = new Trie();
  trie.insert("test");
  trie.insert("contest");
  trie.delete("test");
  expect(trie.find("con").sort()).toEqual(["contest"]);
});

import Stack from "./stack";

class TrieNode {
  public children?: { [id: string]: TrieNode } = {};

  public content: string;
  public isWord: boolean;
  constructor(i = "") {
    this.content = i;
    this.isWord = false;
  }
}

export default class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (curr.children && curr.children[word[i]] === undefined) {
        curr.children[word[i]] = new TrieNode(word[i]);
      }
      if (curr.children) {
        curr = curr.children[word[i]];
      }
    }
    curr.isWord = true;
  }
  find(word: string): string[] {
    let res: string[] = [];
    let curr = this.root;
    let stack = new Stack<TrieNode>();
    stack.push(curr);

    let string = "";
    while (stack.length) {
      let node = stack.pop();
      string += node?.content.toString();
      // console.log(`${node?.content}, ${node?.isWord}`);

      let childCount = 0;
      for (const child in node?.children) {
        childCount++;
      }

      if (node?.isWord && string.slice(0, word.length) !== word) {
        string = "";
      } else if (node?.isWord && childCount === 0) {
        res.push(string);
        string = "";
      } else if (node?.isWord) {
        res.push(string);
      }
      // console.log(string);
      for (const child in node?.children) {
        if (node.children.hasOwnProperty(child)) {
          stack.push(node.children[child]);
        }
      }
    }

    return res;
  }
  delete(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (curr.children) {
        curr = curr.children[word[i]];
      }
    }
    curr.isWord = false;
  }
}

export interface List<T> {
  get length(): number;
  removeAt(index: number): T | undefined;
  remove(item: T): T | undefined;
  get(index: number): T | undefined;
  prepend(item: T): void;
  append(item: T): void;
  insertAt(item: T, idx: number): void;
}

export type Point = {
  x: number;
  y: number;
};

export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export type GeneralNode<T> = {
  value: T;
  children: GeneralNode<T>[];
};

export interface ILRU<K, V> {
  update(key: K, value: V): void;
  get(key: K): V | undefined;
}

export type WeightedAdjacencyMatrix = number[][];
export type GraphEdge = { to: number; weight: number };
export type WeightedAdjacencyList = GraphEdge[][];

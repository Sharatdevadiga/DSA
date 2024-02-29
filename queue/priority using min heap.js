//priority queue using min binary heap;

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.values.length - 1;
    const node = this.values[i];

    while (i > 0) {
      let parentIdx = Math.floor((i - 1) / 2);
      let parent = this.values[parentIdx];

      if (node.priority < parent.priority) {
        [this.values[parentIdx], this.values[i]] = [
          this.values[i],
          this.values[parentIdx],
        ];
      } else {
        break;
      }
      i = parentIdx;
    }
  }

  dequeue() {
    if (this.values.length === 0) return undefined;

    let node = this.values[0];
    let lastNode = this.values.pop();
    this.values[0] = lastNode;
    this.sinkDown();
    return node;
  }

  sinkDown() {
    let i = 0;
    let length = this.values.length;
    let node = this.values[0];

    while (true) {
      let leftIdx = 2 * i + 1;
      let rightIdx = 2 * i + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild.priority < node.priority) swap = leftIdx;
      }

      if (rightIdx < length) {
        let rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightIdx;
      }

      if (swap === null) break;

      [this.values[i], this.values[swap]] = [this.values[swap], this.values[i]];
      i = swap;
    }
  }
}

// Immutable heap
class Heap {
  private heap: number[];

  constructor(numbers: number[]) {
    this.heap = [...numbers];
    this.heapify();
  }

  public getRoot(): number {
    return this.heap[0];
  }

  // remove root & ensures that heap is intact
  public removeRoot(): Heap {
    return new Heap(this.heap.slice(1, this.heap.length));
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public toString(): string {
    return this.heap.join(", ");
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(pos1: number, pos2: number) {
    const temp = this.heap[pos1];
    this.heap[pos1] = this.heap[pos2];
    this.heap[pos2] = temp;
  }

  private siftDown(start: number, end: number) {
    let rootIndex = start;

    while (this.leftChildIndex(rootIndex) <= end) {
      const leftChildIndex = this.leftChildIndex(rootIndex);
      const rightChildIndex = this.rightChildIndex(rootIndex);
      let swapIndex = rootIndex;

      if (this.heap[swapIndex] < this.heap[leftChildIndex]) {
        swapIndex = leftChildIndex;
      }

      if (rightChildIndex <= end &&
           this.heap[swapIndex] < this.heap[rightChildIndex]) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === rootIndex) {
        return;
      } else {
        this.swap(rootIndex, swapIndex);
        rootIndex = swapIndex;
      }
    }
  }

  private heapify() {
    const end = this.heap.length - 1;
    let start = this.parentIndex(end);

    while (start >= 0) {
      this.siftDown(start, end);
      start--;
    }
  }
}

export function sort(numbers: number[]): number[] {
  let heap = new Heap(numbers);
  let sorted: number[] = [];

  while (!heap.isEmpty()) {
    sorted = [heap.getRoot(), ...sorted];
    heap = heap.removeRoot();
  }

  return sorted;
}

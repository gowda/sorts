package `in`.kanur.sorts

object HeapSort : Sort {
  class Heap(list: IntArray) {
    private var heap: IntArray = list.clone()

    private fun parentIndex(index: Int): Int {
      return (index - 1) / 2
    }

    private fun leftChildIndex(index: Int): Int {
      return 2 * index + 1
    }

    private fun rightChildIndex(index: Int): Int {
      return 2 * index + 2
    }

    private fun swap(pos1: Int, pos2: Int) {
      val temp = heap[pos1]
      heap[pos1] = heap[pos2]
      heap[pos2] = temp
    }

    private fun siftDown(start: Int, end: Int) {
      var rootIndex = start

      while(leftChildIndex(rootIndex) <= end) {
        val leftIndex = leftChildIndex(rootIndex)
        val rightIndex = rightChildIndex(rootIndex)
        var swapIndex = rootIndex

        if (heap[swapIndex] < heap[leftIndex]) {
          swapIndex = leftIndex
        }

        if (rightIndex <= end && heap[swapIndex] < heap[rightIndex]) {
          swapIndex = rightIndex
        }

        if (swapIndex == rootIndex) {
          return
        } else {
          swap(swapIndex, rootIndex)
          rootIndex = swapIndex
        }
      }
    }

    private fun heapify() {
      val end = heap.size - 1
      var start = parentIndex(end)

      while (start >= 0) {
        siftDown(start, end)
        start--
      }
    }

    init {
      heapify()
    }

    fun isEmpty(): Boolean {
      return heap.isEmpty()
    }

    fun getRoot(): Int {
      return heap.first()
    }

    fun removeRoot(): Heap {
      return Heap(heap.sliceArray(IntRange(1, heap.size - 1)))
    }
  }

  override fun sort(list: IntArray): IntArray {
    var heap = Heap(list)
    var sorted = intArrayOf()

    while(!heap.isEmpty()) {
      sorted = intArrayOf(heap.getRoot()) + sorted
      heap = heap.removeRoot()
    }

    return sorted
  }
}

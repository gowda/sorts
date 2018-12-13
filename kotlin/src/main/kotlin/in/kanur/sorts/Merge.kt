package `in`.kanur.sorts

object Merge : Sort {
  private fun merge(left: IntArray, right: IntArray): IntArray {
    var leftIndex = 0
    var rightIndex = 0
    var merged = intArrayOf()

    while (leftIndex < left.size && rightIndex < right.size) {
      if (left[leftIndex] < right[rightIndex]) {
        merged += intArrayOf(left[leftIndex])
        leftIndex++
      } else {
        merged += intArrayOf(right[rightIndex])
        rightIndex++
      }
    }

    return merged +
      left.sliceArray(IntRange(leftIndex, left.size - 1)) +
      right.sliceArray(IntRange(rightIndex, right.size - 1))
  }

  override fun sort(list: IntArray): IntArray {
    if (list.size <= 1) {
      return list
    }

    val middle: Int = list.size / 2
    return merge(
      sort(list.sliceArray(IntRange(0, middle - 1))),
      sort(list.sliceArray(IntRange(middle, list.size - 1)))
    )
  }
}

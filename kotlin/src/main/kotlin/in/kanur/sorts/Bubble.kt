package `in`.kanur.sorts

object Bubble : Sort {
  private fun removeAt(list: IntArray, position: Int): IntArray {
    val start = 0
    val end = list.size - 1

    return when (position) {
      start ->
        list.slice(IntRange(start + 1, end))
      end ->
        list.slice(IntRange(0, end - 1))
      else ->
        list.slice(IntRange(start, position - 1)) +
          list.slice(IntRange(position + 1, end))
    }.toIntArray()
  }

  override fun sort(list: IntArray): IntArray {
    return when (list.size) {
      0 -> list
      else -> {
        val maxIndex = list.foldIndexed(0) { index, maxIndex, num ->
          if (num > list[maxIndex]) {
            index
          } else {
            maxIndex
          }
        }

        sort(removeAt(list, maxIndex)) + intArrayOf(list[maxIndex])
      }
    }
  }
}

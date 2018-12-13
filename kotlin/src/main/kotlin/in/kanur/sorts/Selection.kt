package `in`.kanur.sorts

object Selection : Sort {
  private fun removeAt(list: IntArray, position: Int): IntArray {
    val start = 0
    val end = list.size - 1

    return when (position) {
      start ->
        list.sliceArray(IntRange(start + 1, end))
      end ->
        list.sliceArray(IntRange(0, end - 1))
      else ->
        list.sliceArray(IntRange(start, position - 1)) +
          list.sliceArray(IntRange(position + 1, end))
    }
  }

  override fun sort(list: IntArray): IntArray {
    return when(list.size) {
      0 -> list
      else -> {
        val minIndex = list.foldIndexed(0) { index, minIndex, num ->
          if (num < list[minIndex])
            index
          else
            minIndex
        }

        intArrayOf(list[minIndex]) + sort(removeAt(list, minIndex))
      }
    }
  }
}

package `in`.kanur.sorts

object Quicksort : Sort {
  data class Partition(var lower: IntArray, var higher: IntArray)

  override fun sort(list: IntArray): IntArray {
    return when (list.size) {
      0 -> list
      else -> {
        val pivot = list[list.size - 1]
        val partitions = list.sliceArray(IntRange(0, list.size - 2))
          .fold(Partition(intArrayOf(), intArrayOf())) { partitions, num ->
            if (num > pivot) {
              partitions.copy(higher = partitions.higher + intArrayOf(num))
            } else {
              partitions.copy(lower = partitions.lower + intArrayOf(num))
            }
          }

        sort(partitions.lower) + intArrayOf(pivot) + sort(partitions.higher)
      }
    }
  }
}

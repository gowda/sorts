package `in`.kanur.sorts

fun main(args: Array<String>) {
  val array = intArrayOf(3, 2, 3, 7, 5, 4, 5, 19, 1)

  val sortedArray = Merge.sort(array)
  println(sortedArray.joinToString(", "))
}

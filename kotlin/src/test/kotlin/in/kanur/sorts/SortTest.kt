package `in`.kanur.sorts

import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe
import kotlin.test.assertTrue

object SortTest: Spek({
  arrayOf(Selection, Bubble, Quicksort, Merge, HeapSort).forEach { implementation ->
    describe("${implementation::class.simpleName}.sort") {
      context("when input is empty") {
        val testArray: IntArray by memoized { intArrayOf() }

        it("returns empty array") {
          assertTrue {
            testArray.contentEquals(implementation.sort(testArray))
          }
        }
      }

      context("when input is sorted") {
        val testArray: IntArray by memoized { intArrayOf(1,2,3) }

        it("returns the same array") {
          assertTrue {
            testArray.contentEquals(implementation.sort(testArray))
          }
        }
      }

      context("when input is array of same number") {
        val testArray: IntArray by memoized { intArrayOf(1,1,1) }

        it("returns the same array") {
          assertTrue {
            testArray.contentEquals(implementation.sort(testArray))
          }
        }
      }

      context("when input is not sorted") {
        arrayOf(
          Pair(
            intArrayOf(3,2,1),
            intArrayOf(1,2,3)
          ),
          Pair(
            intArrayOf(3, 5, 2, 4, 1, 99, 88, 11),
            intArrayOf(1, 2, 3, 4, 5, 11, 88, 99)
          ),
          Pair(
            intArrayOf(1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6),
            intArrayOf(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6)
          )
        ).forEach { (unsorted, sorted) ->
          it("returns the sorted array") {
            assertTrue {
              sorted.contentEquals(implementation.sort(unsorted))
            }
          }
        }
      }
    }
  }
})

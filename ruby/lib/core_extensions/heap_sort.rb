require "lib/core_extensions/swappable"

module CoreExtensions
  # Refines Array#sort with bubble sort implementation
  module HeapSort
    refine ::Array do
      using CoreExtensions::Swappable

      def sort!
        heapify!

        end_index = length - 1
        loop do
          break if end_index.zero? || end_index.negative?

          swap!(end_index, 0)
          end_index -= 1
          sift_down!(0, end_index)
        end
      end

      def sort
        numbers = clone
        numbers.sort!
        numbers
      end

      private

      def parent_index(index)
        (index - 1) / 2
      end

      def left_child_index(index)
        2 * index + 1
      end

      def right_child_index(index)
        2 * index + 2
      end

      # rubocop:disable Metrics/AbcSize
      # rubocop:disable Metrics/MethodLength
      def sift_down!(start_index, end_index)
        root_index = start_index

        loop do
          left_index = left_child_index(root_index)
          right_index = right_child_index(root_index)
          swap_index = root_index

          if left_index <= end_index && self[swap_index] < self[left_index]
            swap_index = left_index
          end

          if right_index <= end_index && self[swap_index] < self[right_index]
            swap_index = right_index
          end

          break if swap_index == root_index

          swap!(swap_index, root_index)
          root_index = swap_index
        end
      end
      # rubocop:enable Metrics/MethodLength
      # rubocop:enable Metrics/AbcSize

      def heapify!
        end_index = length - 1
        start_index = parent_index(end_index)
        loop do
          break if start_index.negative?

          sift_down!(start_index, end_index)
          start_index -= 1
        end
      end
    end
  end
end

require "lib/core_extensions/swappable"

module CoreExtensions
  # Refines Array#sort with quicksort implementation
  module Quicksort
    refine Array do
      using CoreExtensions::Swappable

      def sort!
        return if sorted?

        quicksort!(0, length - 1)
      end

      def sort
        numbers = clone
        numbers.sort!
        numbers
      end

      private

      def sorted?
        nil? || length <= 1
      end

      def partition!(start_index, end_index)
        pivot = self[end_index]
        lower_index = start_index

        (start_index..(end_index - 1)).each do |higher_index|
          next if self[higher_index] > pivot

          swap!(lower_index, higher_index) if lower_index != higher_index
          lower_index += 1
        end

        swap!(lower_index, end_index)

        lower_index
      end

      def quicksort!(start_index, end_index)
        pivot_index = partition!(start_index, end_index)

        if (pivot_index - 1) > start_index
          quicksort!(start_index, (pivot_index - 1))
        end

        # rubocop:disable Style/GuardClause
        if (pivot_index + 1) < end_index
          quicksort!((pivot_index + 1), end_index)
        end
        # rubocop:enable Style/GuardClause
      end
    end
  end
end

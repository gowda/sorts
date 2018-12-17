require "lib/core_extensions/swappable"

module CoreExtensions
  # Refines Array#sort with quicksort implementation
  module SelectionSort
    refine Array do
      using CoreExtensions::Swappable
      def sort!
        each_with_index do |_num, index|
          swap_index = index
          next if index >= (length - 2)

          ((index + 1)..(length - 1)).each do |unsorted_index|
            next unless self[unsorted_index] < self[swap_index]

            swap_index = unsorted_index
          end

          swap!(index, swap_index) if swap_index != index
        end
      end

      def sort
        numbers = clone
        numbers.sort!
        numbers
      end
    end
  end
end

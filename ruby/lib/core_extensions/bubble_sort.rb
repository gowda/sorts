require "lib/core_extensions/swappable"

module CoreExtensions
  # Refines Array#sort with bubble sort implementation
  module BubbleSort
    refine ::Array do
      using CoreExtensions::Swappable

      def sort!
        loop do
          swapped = bubble!

          break unless swapped
        end
      end

      def sort
        numbers = clone
        numbers.sort!
        numbers
      end

      private

      def bubble!
        prev_index = -1
        swapped = false
        each_with_index do |num, index|
          if prev_index != -1 && self[prev_index] > num
            swap!(prev_index, index)
            swapped = true
          end

          prev_index = index
        end

        swapped
      end
    end
  end
end

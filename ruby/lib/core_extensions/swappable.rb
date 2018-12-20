module CoreExtensions
  # Refines Array with addition of #swap! to swap elements in-place
  module Swappable
    refine ::Array do
      # returns true when swapped, else false
      def swap!(index1, index2)
        return if self[index1].nil? || self[index2].nil?

        tmp = self[index1]
        self[index1] = self[index2]
        self[index2] = tmp
      end
    end
  end
end

require "rspec"
require "lib/core_extensions/selection_sort"
require "spec/sorting"

# FIXME: use shared examples from "spec/sorting"
describe "Selection sort" do
  using CoreExtensions::SelectionSort

  context "on empty array" do
    let(:array) { Array.new(0) }

    it "returns an empty array" do
      expect(array.sort).to match_array(array)
    end
  end

  context "on sorted array" do
    let(:array) { Array.[](1, 2, 3, 4, 5, 6) }

    it "returns same array" do
      expect(array.sort).to match_array(array)
    end
  end

  context "on array of a single repeated number" do
    let(:array) { Array.[](1, 1, 1, 1, 1, 1, 1, 1) }

    it "returns the same array" do
      expect(array.sort).to match_array(array)
    end
  end

  [
    {
      sorted: Array.[](1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
      unsorted: Array.[](10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
    },
    {
      sorted: Array.[](
        1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10
      ),
      unsorted: Array.[](
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      )
    }
  ].each do |data|
    context "when input is not sorted" do
      let(:array) { data[:unsorted] }
      let(:result) { data[:sorted] }

      it "returns sorted array" do
        expect(array.sort).to be_ordered
      end
    end
  end
end

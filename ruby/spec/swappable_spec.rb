require "rspec"
require "lib/core_extensions/swappable"

describe "Swappable" do
  using CoreExtensions::Swappable

  context "Array#swap" do
    context "on empty array" do
      let(:array) { [] }

      it "does nothing" do
        expect { array.swap!(1, 1) }.to_not(change { array })
      end
    end

    context "between same index" do
      let(:array) { [1, 2, 3, 4, 5] }

      it "does nothing" do
        expect { array.swap!(3, 3) }.to_not(change { array })
      end
    end

    context "between ends" do
      let(:array) { [1, 2, 3, 4, 5] }
      let(:result) { [5, 2, 3, 4, 5] }

      it "swaps elements" do
        expect { array.swap!(0, 4) }.to(change { array })
      end
    end

    context "between indices within" do
      let(:array) { [1, 2, 3, 4, 5] }
      let(:result) { [1, 4, 3, 2, 5] }

      it "swaps elements" do
        expect { array.swap!(1, 3) }.to(change { array })
      end
    end
  end
end

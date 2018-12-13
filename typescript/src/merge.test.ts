import { expect } from "chai";
import rewire from "rewire";

describe("Merge sort", () => {
  context("merge", () => {
    let merge: (left: number[], right: number[]) => number[];
    before((done) => {
      const mergeModule = rewire("./merge");
      merge = mergeModule.__get__("merge");
      done();
    });

    it("returns empty array when arrays are empty", (done) => {
      expect(merge([], [])).to.have.lengthOf(0);
      done();
    });

    it("returns non-empty array when one is empty", (done) => {
      const nonEmptyArray = [1, 2, 3, 4];
      expect(merge([], nonEmptyArray)).to.eql(nonEmptyArray);
      done();
    });

    it("returns merged array when both are sorted", (done) => {
      const sortedArray1 = [1, 2, 3];
      const sortedArray2 = [1, 2, 3];
      expect(merge(sortedArray1, sortedArray2)).to.eql([1, 1, 2, 2, 3, 3]);
      done();
    });

    it("returns merged array with all elements when both are unsorted",
      (done) => {
        const unsortedArray1 = [1, 6, 1, 0, 2, 0, 1, 2];
        const unsortedArray2 = [1, 50, 4, 19, 8, 3];

        expect(merge(unsortedArray1, unsortedArray2)).to.have
          .lengthOf(unsortedArray1.length + unsortedArray2.length);
        done();
    });
  });
});

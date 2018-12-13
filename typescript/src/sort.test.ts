import { expect } from "chai";
import { sort as bubbleSort } from "./bubble";
import { sort as heapSort } from "./heap";
import { sort as mergeSort } from "./merge";
import { sort as quicksort } from "./quicksort";
import { sort as selectionSort } from "./selection";

describe("Sort", () => {
  [
    {name: "Selection", sort: selectionSort},
    {name: "Bubble", sort: bubbleSort},
    {name: "Quicksort", sort: quicksort},
    {name: "Merge", sort: mergeSort},
    {name: "Heap", sort: heapSort},
  ].forEach(({name, sort}) => {
    context(`${name}`, () => {
      context("for empty array", () => {
        it("returns an empty array", (done) => {
          expect(sort([])).to.have.lengthOf(0);
          done();
        });
      });

      context("for sorted array", () => {
        let sortedArray: number[];
        before((done) => {
          sortedArray = [1, 2, 3, 4, 5, 6];
          done();
        });

        it("returns same array", (done) => {
          expect(sort(sortedArray)).to.have.lengthOf(sortedArray.length);
          expect(sort(sortedArray)).to.eql(sortedArray);
          done();
        });
      });

      context("for not sorted array", () => {
        [
          {
            sorted: [1, 2, 3, 4, 5, 11, 88, 99],
            unsorted: [3, 5, 2, 4, 1, 99, 88, 11],
          },
          {
            sorted: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
            unsorted: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
          },
        ].forEach(({unsorted, sorted}) => {
          it(`[${unsorted.join(", ")}] returns sorted array`, (done) => {
            expect(sort(unsorted)).to.have.lengthOf(unsorted.length);
            expect(sort(unsorted)).to.eql(sorted);
            done();
          });
        });
      });
    });
  });
});

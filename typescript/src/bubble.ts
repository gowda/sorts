import { removeAt } from "./utils";

export function sort(numbers: number[]): number[] {
  const length = numbers.length;

  if (length === 0) {
    return numbers;
  }

  const maxIndex = numbers.reduce(
    (previousMaxIndex: number, num: number, index: number) => {
      if (numbers[previousMaxIndex] < num) {
        return index;
      }

      return previousMaxIndex;
    },
    0
  );

  return [
    ...sort(removeAt(numbers, maxIndex)),
    numbers[maxIndex],
  ];
}

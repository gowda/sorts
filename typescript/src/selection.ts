import { removeAt } from "./utils";

export function sort(numbers: number[]): number[] {
  const length = numbers.length;

  if (length === 0) {
    return numbers;
  }

  const minIndex = numbers.reduce(
    (previousMinIndex: number, num: number, index: number) => {
      if (num < numbers[previousMinIndex]) {
        return index;
      }

      return previousMinIndex;
    },
    0
  );

  return [
    numbers[minIndex],
    ...sort(removeAt(numbers, minIndex)),
  ];
}

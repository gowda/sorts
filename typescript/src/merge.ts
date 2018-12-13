function merge(left: number[], right: number[]) {
  let leftIndex = 0;
  let rightIndex = 0;
  let merged: number[] = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged = [...merged, left[leftIndex]];
      leftIndex++;
    } else {
      merged = [...merged, right[rightIndex]];
      rightIndex++;
    }
  }

  return [
    ...merged,
    ...left.slice(leftIndex, left.length),
    ...right.slice(rightIndex, right.length),
  ];
}

export function sort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const middle = Math.floor(numbers.length / 2);
  return merge(
    sort(numbers.slice(0, middle)),
    sort(numbers.slice(middle, numbers.length))
  );
}

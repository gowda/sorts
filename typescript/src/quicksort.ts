class Partition {
  public lower: number[] = [];
  public higher: number[] = [];
}

export function sort(numbers: number[]): number[] {
  const length = numbers.length;

  if (length === 0) {
    return numbers;
  }

  const pivot = numbers[numbers.length - 1];
  const partition = numbers.slice(0, numbers.length - 1)
    .reduce(
      (prtn: Partition, num: number) => {
        if (num > pivot) {
          return {...prtn, higher: [...prtn.higher, num]};
        }

        return {...prtn, lower: [...prtn.lower, num]};
      },
      new Partition()
    );

  return [
    ...sort(partition.lower),
    pivot,
    ...sort(partition.higher),
  ];
}

export function removeAt(numbers: number[], position: number) {
  if (position === 0) {
    return numbers.slice(1);
  }

  if (position === (numbers.length - 1)) {
    return numbers.slice(0, position);
  }

  return numbers.slice(0, position).concat(numbers.slice(position + 1));
}

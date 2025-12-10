import { readRows } from '../advent.js';

export function part1(input) {
  return readRows(input)
    .map((row) => row.split('').map((d) => parseInt(d)))
    .map((bank) => getJoltage(2, bank))
    .reduce((acc, cur) => (acc += cur), 0);
}

export function part2(input) {
  return readRows(input)
    .map((row) => row.split('').map((d) => parseInt(d)))
    .map((bank) => getJoltage(12, bank))
    .reduce((acc, cur) => (acc += cur), 0);
}

function getJoltage(size, available, joltage = []) {
  if (joltage.length === size) {
    return parseInt(joltage.join(''));
  }

  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < available.length; i++) {
    if (available.length - i >= size - joltage.length) {
      if (max < available[i]) {
        max = available[i];
        maxIndex = i;
      }
    }
  }

  return getJoltage(size, available.slice(maxIndex + 1), [
    ...joltage,
    available[maxIndex],
  ]);
}

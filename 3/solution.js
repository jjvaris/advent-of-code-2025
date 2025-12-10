import { readRows } from '../advent.js';

export function part1(input) {
  const rows = readRows(input);
  return rows
    .map((row) => getJoltage1(row))
    .reduce((acc, cur) => (acc += cur), 0);
}

function getJoltage1(bank) {
  const digits = bank.split('').map((d) => parseInt(d));
  let firstMax = 0;
  let firstMaxIndex = 0;
  let secondMax = 0;
  let secondMaxIndex = 0;
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > firstMax) {
      firstMax = digits[i];
      firstMaxIndex = i;
    }
  }
  for (let i = firstMaxIndex + 1; i < digits.length; i++) {
    if (digits[i] > secondMax) {
      secondMax = digits[i];
      secondMaxIndex = i;
    }
  }
  return parseInt(`${firstMax}${secondMax}`);
}

export function part2(input) {
  return readRows(input)
    .map((row) => row.split(''))
    .map((bank) => getJoltage2(bank, []))
    .map((bank) => parseInt(bank.join('')))
    .reduce((acc, cur) => (acc += cur), 0);
}

function getJoltage2(available, joltage) {
  if (joltage.length === 12) {
    return joltage;
  }

  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < available.length; i++) {
    if (available.length - i >= 12 - joltage.length) {
      if (max < available[i]) {
        max = available[i];
        maxIndex = i;
      }
    }
  }

  return getJoltage2(available.slice(maxIndex + 1), [
    ...joltage,
    available[maxIndex],
  ]);
}

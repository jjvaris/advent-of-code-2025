import { mod, readRows } from '../advent.js';

const rows = readRows('1/input.txt');
// const rows = readRows('1/test-input.txt');

function part1() {
  const result = rows
    .map((row) => [row.slice(0, 1), parseInt(row.slice(1))])
    .reduce(
      (acc, cur) => {
        const next =
          cur[0] === 'L'
            ? mod(acc[0] - cur[1], 100)
            : mod(acc[0] + cur[1], 100);
        return [next, next === 0 ? acc[1] + 1 : acc[1]];
      },
      [50, 0]
    )[1];

  console.log('Part 1:', result);
}

function part2() {
  const result = rows
    .map((row) => [row.slice(0, 1), parseInt(row.slice(1))])
    .reduce(
      (acc, cur) => {
        const direction = cur[0];
        const count = cur[1];
        const current = acc[0];
        const next =
          direction === 'L'
            ? mod(current - count, 100)
            : mod(current + count, 100);
        let zeros = Math.floor(Math.abs(count / 100));
        if (direction === 'R' && next < current && next !== 0 && current !== 0)
          zeros++;
        if (direction === 'L' && next > current && next !== 0 && current !== 0)
          zeros++;
        if (next === 0) zeros++;
        return [next, acc[1] + zeros];
      },
      [50, 0]
    )[1];

  console.log('Part 2:', result);
}

part1();
part2();

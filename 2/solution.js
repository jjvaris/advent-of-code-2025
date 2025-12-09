import { readRows } from '../advent.js';

export function part1(input) {
  const ids = readRows(input)[0].split(',');
  return ids.reduce((acc, cur) => {
    const [firstID, lastID] = cur.split('-').map((n) => parseInt(n));
    let sum = acc;
    for (let curID = firstID; curID <= lastID; curID++) {
      const curIDString = `${curID}`;
      if (
        curIDString.length % 2 === 0 &&
        curIDString.slice(0, curIDString.length / 2) ===
          curIDString.slice(curIDString.length / 2, curIDString.length)
      ) {
        sum += curID;
      }
    }
    return sum;
  }, 0);
}

export function part2(input) {
  const ids = readRows(input)[0].split(',');
  return ids.reduce((acc, cur) => {
    const [firstID, lastID] = cur.split('-').map((n) => parseInt(n));
    let sum = acc;
    for (let curID = firstID; curID <= lastID; curID++) {
      const curIDString = `${curID}`;
      if (isInvalid(curIDString)) {
        sum += curID;
      }
    }
    return sum;
  }, 0);
}

function isInvalid(id) {
  for (let chunkSize = Math.floor(id.length / 2); chunkSize >= 1; chunkSize--) {
    if (id.length % chunkSize !== 0) {
      continue;
    }
    const chunked = chunk(id, chunkSize);
    if (new Set(chunked).size === 1) {
      return true;
    }
  }
  return false;
}

function chunk(input, chunkSize) {
  const array = input.split('');
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk.join(''));
  }
  return result;
}

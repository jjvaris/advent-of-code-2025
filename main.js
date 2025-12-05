const day = process.argv[2];
const inputFile = process.argv[3];
const { part1, part2 } = await import(`./${day}/solution.js`);

const input = `${day}/${inputFile}`;
console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));

const day = process.argv[2];
const inputFile = process.argv[3];
const { part1, part2 } = await import(`./${day}/solution.js`);

console.log('Part 1:', part1(`${day}/${inputFile}`));
console.log('Part 2:', part2(`${day}/${inputFile}`));

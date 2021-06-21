const {readFileSync} = require(`fs`);

// Looks similar to `/path/to/.yarn/cache/lodash-npm-4.17.11-1c592398b2-8b49646c65.zip/node_modules/lodash/ceil.js`
const lodashCeilPath = require.resolve(`lodash/ceil`);

console.log(lodashCeilPath)
console.log(readFileSync(lodashCeilPath));
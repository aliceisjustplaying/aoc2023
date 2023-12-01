/* Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen

In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values? */

const digitMap = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const allNumbersRegex = `(${Object.keys(digitMap).join('|')}|${Object.values(digitMap).join('|')})`;
const input = await Bun.file('1.input').text();
// const input = await Bun.file('1part2test.input').text();
const splitInput = input.split('\n');
let counter = 0;
for (let line of splitInput) {
  // positive lookahead wizardry needed to capture things like "twone"
  // https://stackoverflow.com/a/33903830
  const regex = new RegExp(`(?=${allNumbersRegex})`, 'g');
  const matches = Array.from(line.matchAll(regex), (x) => x[1]);
  let firstDigit = matches.at(0);
  let lastDigit = matches.at(-1);
  for (const [key, value] of Object.entries(digitMap)) {
    firstDigit = firstDigit!.replace(key, value);
    lastDigit = lastDigit!.replace(key, value);
  }
  const lineValue = parseInt(`${firstDigit}${lastDigit}`, 10);
  counter += lineValue;
}

console.log(counter);

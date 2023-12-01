/* each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
*/
const input = await Bun.file('1.input').text();
const splitInput = input.split('\n');
let counter = 0;
for (let line of splitInput) {
  line = line.replaceAll(/[a-z]/g, '');
  const firstDigit = line.at(0);
  const lastDigit = line.at(-1);
  const lineValue = parseInt(`${firstDigit}${lastDigit}`, 10);
  counter += lineValue;
}

console.log(counter);

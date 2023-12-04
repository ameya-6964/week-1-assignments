/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (!str) return 0;
  const vowels = ["a", "e", "i", "o", "u"];

  str = str.toLowerCase();

  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
/* let result = countVowels("hello");

console.log(result); */
module.exports = countVowels;

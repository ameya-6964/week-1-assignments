/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters
  str = str.replace(/[\W_]/g, "");

  // Convert string to lowercase
  str = str.toLowerCase();

  // Check if string is equal to its reversed self
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

module.exports = isPalindrome;

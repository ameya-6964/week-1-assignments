/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sortstrings(str) {
  let array = str.split("");
  array = array.sort();
  let sortedArray = array.join("");
  return sortedArray;
}

function isAnagram(str1, str2) {
  let LowerCaseStr1 = str1.toLowerCase();
  let LowerCaseStr2 = str2.toLowerCase();

  if (sortstrings(LowerCaseStr1) == sortstrings(LowerCaseStr2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;

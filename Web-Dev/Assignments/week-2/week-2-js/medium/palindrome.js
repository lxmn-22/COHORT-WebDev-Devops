/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseString = str.toLowerCase();
  const filteredString = lowercaseString.split('').filter((char) => (char !== '?' && char !== ' ' && char !== '!' && char !== '.' && char !== ',')).join('');
  const reversedString = filteredString.split('').reverse().join('');
  return filteredString === reversedString;
}

module.exports = isPalindrome;
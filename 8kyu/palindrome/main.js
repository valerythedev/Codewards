// Write a function that checks if a given string (case insensitive) is a palindrome.
//  /[\W_]/g is a regular expression in JavaScript that matches 
//   any non-word character or underscore
//   / - The start of the regular expression
// [\W_] - A character set that matches any non-word character (\W) or underscore (_)
// / - The end of the character set
// g - A modifier that tells the regular expression to match globally, meaning it will find 
// all occurrences in the input string rather than just the first one.

function isPalindrome(x) {
  // your code here
 x = x.toLowerCase().replace(/[\W_]/g, '');
  return x === x.split('').reverse().join('');

}
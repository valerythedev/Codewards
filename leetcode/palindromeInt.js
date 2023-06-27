// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
 return false; // Negative numbers are not palindromes
}

// Convert the number to a string
const str = String(x);

let left = 0;
let right = str.length - 1;

while (left < right) {
 if (str[left] !== str[right]) {
   return false; // Mismatch found, not a palindrome
 }
 left++;
 right--;
}

return true; // No mismatches found, it is a palindrome
};
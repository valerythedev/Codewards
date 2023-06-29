// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // variable containing the new string
const characters = []
const openBrackets = ['(', '{', '['];
const closingBrackets = [')', '}', ']'];
const bracketPairs = {
  ')': '(',
  '}': '{',
  ']': '['
};
 for (let i = 0; i < s.length; i++) {
  const char = s[i];

  if (openBrackets.includes(char)) {
    characters.push(char);
  } else if (closingBrackets.includes(char)) {
    const matchingOpenBracket = bracketPairs[char];
    if (characters.length === 0 || characters.pop() !== matchingOpenBracket) {
      return false;
    }
  }
}

return characters.length === 0;
};
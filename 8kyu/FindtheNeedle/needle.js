// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle,

function findNeedle(haystack) {
  // your code here
  const index = haystack.indexOf("needle");
  if (index !== -1) {
    return `found the needle at position ${index}`;
  } else {
    return "needle not found";
  }
}
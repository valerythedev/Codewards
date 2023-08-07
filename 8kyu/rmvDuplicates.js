// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same

function distinct(a) {
  const seen = new Set();
  const result = [];

  for (const num of a) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  return result;

}
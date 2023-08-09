function processString(input) {
  // Split the input string into an array of character sequences
  const sequences = input.split(',');

  // Check if there are at least three sequences
  if (sequences.length < 3) {
    return null;
  }

  // Remove the first and last sequences
  sequences.shift();
  sequences.pop();

  // Join the remaining sequences with spaces
  const result = sequences.join(' ');

  return result;
}
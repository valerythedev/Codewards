// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

// Subsequence
// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.


function LCS(x, y) {
  const m = x.length;
  const n = y.length;

  // Create a 2D array to store the lengths of common subsequences
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Fill in the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (x[i - 1] === y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to construct the longest common subsequence
  let i = m;
  let j = n;
  const result = [];

  while (i > 0 && j > 0) {
    if (x[i - 1] === y[j - 1]) {
      result.unshift(x[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return result.join('');
}
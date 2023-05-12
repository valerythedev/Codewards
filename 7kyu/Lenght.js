// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue){
  // your code
   const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i % 2 === 0 ? firstValue : secondValue);
  }
  return result;
}
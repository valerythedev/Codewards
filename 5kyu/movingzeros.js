// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
  const nonZeros = arr.filter((element) => element !== 0);
  const zeros = arr.filter((element) => element === 0);

  return nonZeros.concat(zeros);
}

// In this implementation, we use the filter method to create two arrays: nonZeros and zeros. The nonZeros array contains all the elements from the input array that are not equal to zero, and the zeros array contains only the zero elements. Finally, we concatenate the nonZeros array with the zeros array to get the desired result.
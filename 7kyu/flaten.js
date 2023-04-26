// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
 const flatten = array.flat(); // flatten the 2D array using the flat() method
  flatten.sort((a, b) => a - b); // sort the flattened array in ascending order
  return flatten;
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = mergeSortedArrays(nums1, nums2);

   const length = mergedArray.length;
   
   // Check if the combined length is odd or even
   if (length % 2 === 1) {
       // If it's odd, return the middle element
       return mergedArray[Math.floor(length / 2)];
   } else {
       // If it's even, return the average of the two middle elements
       const middle1 = mergedArray[length / 2 - 1];
       const middle2 = mergedArray[length / 2];
       return (middle1 + middle2) / 2;
   }
}

function mergeSortedArrays(nums1, nums2) {
   const mergedArray = [];
   let i = 0;
   let j = 0;

   while (i < nums1.length && j < nums2.length) {
       if (nums1[i] < nums2[j]) {
           mergedArray.push(nums1[i]);
           i++;
       } else {
           mergedArray.push(nums2[j]);
           j++;
       }
   }

   // Add the remaining elements from both arrays
   while (i < nums1.length) {
       mergedArray.push(nums1[i]);
       i++;
   }

   while (j < nums2.length) {
       mergedArray.push(nums2[j]);
       j++;
   }

   return mergedArray;
};
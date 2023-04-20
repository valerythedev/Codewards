// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers){
  // Create an empty string to store the formatted phone number
  let phoneNumber = ''
  // Concatenate the area code
   phoneNumber = phoneNumber + '(' + numbers[0] + numbers[1] + numbers[2] + ') '
 // Concatenate the prefix
   phoneNumber = phoneNumber + numbers[3] + numbers[4] + numbers[5] + '-';
  // Concatenate the line number
   phoneNumber = phoneNumber + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  // Return the formatted phone number
  return phoneNumber
}
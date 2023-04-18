// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  // ...
  if (words.length === 0) {
    return '';
  }

  // Split the input string into an array of words
  const wordsArray = words.split(' ');

  // Sort the words array based on the number in each word
  wordsArray.sort((a, b) => {
    const numberA = +(a.match(/\d+/)[0]);
    const numberB = +(b.match(/\d+/)[0]);
    return numberA - numberB;
  });

  // Join the sorted words back into a string and return it
  return wordsArray.join(' ');
}
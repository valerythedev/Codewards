// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let length = s.length;

  if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    const middleCharacter = s[middleIndex];
    return middleCharacter;
  } else {
    const middleIndex1 = Math.floor(length / 2) - 1;
    const middleIndex2 = Math.floor(length / 2);
    const middleCharacter1 = s[middleIndex1];
    const middleCharacter2 = s[middleIndex2];
    return middleCharacter1 + middleCharacter2;
  }
}

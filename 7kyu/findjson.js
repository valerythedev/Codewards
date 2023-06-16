// You have a friend who works for a well known animation studio. He has heard you talk about your mad programming skills and ask for your help in writing a function that can search some JSON records and return matching character details.

// He needs to be able to search for objects in the collection by any of the objects keys and return an array of all the matches.

function getCharacters(obj, key, val) {
  let foundCharacters = [];
  // Insert fun here
  Object.keys(obj).forEach(characterKey => {
    if (typeof obj[characterKey] === 'object') {
      // Recursively search nested objects
      let nestedMatches = getCharacters(obj[characterKey], key, val);
      foundCharacters = foundCharacters.concat(nestedMatches);
    } else {
      if (characterKey.toLowerCase() === key.toLowerCase() && obj[characterKey].toString().toLowerCase() === val.toLowerCase()) {
        foundCharacters.push(obj);
      }
    }
  });
  // return matching characters
  return foundCharacters;
}
// Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
  // create an empty object
  let obj = {};

  // loop over every single character in string
  for (let i = 0; i < str.length; i++) {
    if (/[a-z0-9A-Z]/.test(str[i])) {
      const char = str[i].toLowerCase();
      if (obj[char] > 0) {
        obj[str]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  //return the object
  return obj;
}
console.log(charCount("Hi"));




// TRANSFORMING CODE IN A BETTER WAY which is more faster




// Refactoring the code
function charCount1(str) {
  let obj = {};

  for (let char of str) {
    if (isAlphNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphNumeric(char) {
    char = char.charCodeAt(0)
    if ((char > 47 && char < 58) || (char > 64 && char < 91) || (char > 96 && char < 123)) {
        return true;
    } else {
        return false;
    }
}

console.log(charCount1("Hi Ajay"));

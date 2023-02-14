// Write a function called same which accepts two array the function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// same([1,2,3], [4,1,9]) ---> true
// same([1,2,3], [1,9]) ---> false
// same([1,2,1], [4,4,1]) ---> false

// Traditional way to solve the issue

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1) {
        return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// console.log(same([1, 2, 3], [4, 1, 9]));
// Time Complexity is O(n2) = because inside the for loop the indexOf() method called which is O(n) so nested loop time complexity is O(n2)

// Here the Frequency counter problem solving pattern comes in to the picture

function sameRefactored(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let elem of arr1) {
    frequency1[elem] = (frequency1[elem] || 0) + 1;
  }
  for (let elem of arr2) {
    frequency2[elem] = (frequency2[elem] || 0) + 1;
  }
  for(let key in frequency1) {
    if(!(key**2 in frequency2)) {
      return false;
    }
    // Doubled check with value wether it is having same value in both frequency object not key remember
    console.log(frequency2[key**2] ,frequency1[key]);
    if(frequency2[key**2] !== frequency1[key]) {
      return false
    }
  }
  return true
}
console.log(sameRefactored([1, 2, 3, 2], [4, 1, 9, 4]));
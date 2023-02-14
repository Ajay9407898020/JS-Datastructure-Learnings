/*
Count Unique values

Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

countUniqueValues([111111,2]) //2
countUniqueValues([1,2,4,2,5,23,5,2]) //4
*/
function countUniqueValues(array) {
    if(array.length == 0 ) return 0;
    let i = 0;
    for(let j = 1; j < array.length; j++) {
        if(array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i+1;
}
console.log(countUniqueValues([1,1,1,1,1,1,2,2,3,6]));
// [1,2,4,2,5,23,5,2]
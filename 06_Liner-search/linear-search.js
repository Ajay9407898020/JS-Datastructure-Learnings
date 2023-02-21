// Linear search

function linearSearch(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,4,6,7,4], 1));

// Time Complexity is O(N) is worst case
// Time Complexity is O(N) is Average case
// Time Complexity is O(1) is best case
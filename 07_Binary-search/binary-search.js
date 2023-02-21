// Binary search
function binarySearch(array, searchValue) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let middle = Math.ceil((left + right) / 2);
        if(array[middle] === searchValue) {
            return middle;
        } else if(array[middle] > searchValue) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 8))

// Time complexity of Binary search is O(n)
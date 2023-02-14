/* Write a function called sumZero which accepts a soted array of integers. The function should find the first pair
where the sum i 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
*/

// Traditional Way to solve the problem having time complexity is O(n^2);
function sumZero(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if( array[i] + array[j] === 0) {
                return [array[i], array[j] ];
            }
        }
    }
    return;
}
// console.log(sumZero([-3,-2,-1,0,1,2,3]))
// console.log( sumZero([-2,0,1,3]) )

// Using Multiple Pointer having time complexity is O(1)
function sumZero1(array) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let sum = array[left] + array[right];
        if( sum === 0) {
            return [array[left], array[right]];
        } else if(sum > 0) {
            right -= 1;
        } else {
            left += 1;
        }
    }
}
console.log(sumZero1([-3,-2,-1,0,1,2,3]))
console.log(sumZero1([-2,0,1,3]));

// T.C O(n^2)
// S.C O(1)

/*
Sliding Window

Write a function called maSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

maSubArraySum([1,2,5,2,8,1,5], 2) // 10
maSubArraySum([1,2,5,2,8,1,5], 4) // 17
*/

// Traditional way
function maxSubArraySum(array, num) {
    if(array.length < num) return null;

    var max = -Infinity;
    for(let i = 0; i < array.length - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += array[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4));
// Time Complexity O(N^2)


// Actual Way to do it using sliding window
function maxSubArraySum1(array, num) {
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for(let i = num;  i < array.length; i++ ) {
        tempSum = tempSum - array[i - num]  + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubArraySum1([1,2,5,2,8,1,5], 4));
// Time complexity : O(N);
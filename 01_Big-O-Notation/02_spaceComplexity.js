// EXP1: sum of array element
function sum(arr) {
    let total = 0;   //  ------ total = 1space
    for(let i = 0; i < arr.length; i++) {   // ------ i = 1space
        total += arr[i];
    }
    return total;
}
console.log('sum = ', sum([1,2,3,4,5])); //---- space complexity O(1)

//Exp2
function double(arr) {
    let newArray = [];  // ------ newArray = 1space
    for(let i = 0; i < arr.length; i++) {
        newArray.push(2* arr[i]);   // --------- creating space of array with respect to loop counts
    }
    return newArray;
} 

console.log('doubled = ', double([1,2,3,4,])); //----- space complexity is O(n)


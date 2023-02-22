// Bubble sort

// 1st way which we generally use having some false comparision as well which is not correct
function bubbleSortFalse(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++){
            console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}
// console.log(bubbleSortFalse([23,1,5,44,6,21]));
/*
If you run the above code you will find undefined which tell us that NO use comparison is also happening because In first case we will get the greatest Item of an array and swap to last then why do we need to compair it again so we need to reduce the comparison
*/


function bubbleSort(array) {
    for(let i = array.length; i >= 0; i--) {
        for(let j = 0; j < (i - 1); j++){
            console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}
console.log(bubbleSort([23,1,5,44,6,21]));

function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

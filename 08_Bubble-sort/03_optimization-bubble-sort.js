// Optimization of bubble sort when the array is soted


function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function bubbleSort(array) {
    let noSwap;
    for(let i = array.length; i >= 0; i--) {
        noSwap = true;
        for(let j = 0; j < (i - 1); j++){
            console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]){
                swap(array, j, j+1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return array;
}
console.log(bubbleSort([4, 1,2,3]));

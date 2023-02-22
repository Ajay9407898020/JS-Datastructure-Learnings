// Js has built in sort method not works as expected

const strArray = ['steel', 'data', 'logic', 'programming'];
console.log(strArray.sort()); //works fine

const numArray = [6,4,2,1,15,19,8];
console.log(numArray.sort()); //In correct output

// Use Comparator function 
function numberCompair(num1, num2) {
    return num1 - num2;
}
console.log(numArray.sort(numberCompair)); //Correct

// Even we can compair string with its string length also you can reverse
function stringCompair(str1, str2) {
    return str1.length - str2.length;
}
console.log(strArray.sort(stringCompair));
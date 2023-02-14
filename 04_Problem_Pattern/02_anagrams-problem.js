/*
Given two strings, write a function to determine if the second string is an anagram of the firs. An anagram is a word, pharese or name formed by rearranging the letters of another, such as cinema formed from iceman

ex
validAnagram('', '')  //true
validAnagram('aaz', 'zza')  //false
validAnagram('anagram', 'nagaram')  //true
*/

// MY Approach
function validAnagram(str1, str2){
    str1 = str1.split('');
    str2 = str2.split('');
    let frequency1 = {};
    let frequency2 = {};
    for(item of str1) {
        frequency1[item] =  (frequency1[item]|| 0) + 1;
    }
    for(item of str2) {
        frequency2[item] =  (frequency2[item]|| 0) + 1;
    }
    for(let element in frequency1) {
        if(!(element in frequency2) || frequency1[element] !== frequency2[element]) {
            return false;
        }
    }
    for(let element in frequency2) {
        if(!(element in frequency1) || frequency2[element] !== frequency1[element]) {
            return false;
        }
    }
    return true;
}
// console.log(validAnagram('anagram', 'nagaram'));

// Real Apprach
function validAnagramReal(str1, str2) {
    if(str1.length !==  str2.length) {
        return false;
    }
    let lookup = {}
    for(let item of str1) {
        lookup[item] = lookup[item] ? lookup[item] + 1: 1;
    }
    for(let item of str2) {
        if(!lookup[item]) {
            return false;
        } else {
            lookup[item] -= 1;
        }
    }
    return true
}
console.log(validAnagramReal('anagram', 'nagaram'));
// Naive string search

function naiveStringSearch(longString, subString) {
    let count = 0;
    for(let i = 0; i < longString.length; i++) {
        for(let j = 0; j < subString.length; j++) {
            if(subString[j] !== longString[i+j]) { 
                console.log('BREAK');
                break
            }
            if(j === subString.length -1) {
                console.log('FOUND')
                count++;
            }
        }
    }
    return count;
}
console.log(naiveStringSearch('lolstre dfierndlol', 'lol'))
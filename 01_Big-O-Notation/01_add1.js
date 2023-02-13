// suppose we want to add from 1 to n  and we have two approach which one is best how to check

// 1st Approach
function addUpTo1(n) {
    let total = 0;                  //------1
    for(let i = 1; i<=n; i++) {     //------n
        total += i;                 //------n
    }
    return total                    //------1
}
console.log(addUpTo1(3))

//  2nd Approach
function addUpTo2(n) {
    return n * (n + 1) /2;         //-----1
}
console.log(addUpTo2(3))   //This one is better due to O(1)


// Which one is better
/*
1. Faster
2. Less Memory-intesive
3. more Redable

*/

// Check the performace based on big notation

function logAtlease5(n) {
    for(let i=0; i < Math.max(5,n); i++) {
        console.log(i);
    }
}
console.log('logAtlease5')
logAtlease5(2);  // -------- n vlaue greater than 5 will give O(n)

function logAtMost5(n) {
    for (let i = 0; i < Math.min(5,n); i++) {
        console.log(i);
    }
}
console.log('logAtMost5')
logAtMost5(100000000);  //-----> 0,1,2,3,4,5  at any value greter than 5 so It is constant
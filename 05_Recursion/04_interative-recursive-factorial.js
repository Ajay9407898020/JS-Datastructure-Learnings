// Factorial(3) ==> Interative Approach

function factorialI(num) {
    let total = 1;
    for(let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}
console.log(factorialI(3));

// Recursive Approach
function factorialR(num) {
    if(num === 1) return 1;
    return num * factorialR(num-1);
}
console.log(factorialR(5));
// Wednesday: Factorialize!
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

//define a function that take a number
//define a variable to hold the result and assign it to 1 
//for loop from 1 to the number
//multiply each number with the previous result
// return the result
function factorialize(number) {    
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;        
    } 
    return factorial;
}

console.log(factorialize(0) ); //should return 1.
console.log(factorialize(10));//should return 3628800.
console.log(factorialize(20));//should return 2432902008176640000.


 
 
// Tuesday: JS Intermediate
// 1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.

//define sum variable to hold the sum
//for loop from 200 to 2700
//if condition to check if the number is dividable by 3 but not 5 or 5 but not 3
//add the number 
//print the sum
let sum1  = 0;
for (let i = 200; i <= 2700; i++) {
    if((i%3 === 0 && i%5 != 0) || (i%5 === 0 && i%3 != 0))
       sum1 += i;
}
console.log(sum1);

//2. Shift the Values
//create an algorithm that shifts each number by one to the front.

let Y=[2,1,6,4,-7];
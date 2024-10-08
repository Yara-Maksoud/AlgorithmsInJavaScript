// Tuesday: JS Intermediate
// 1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.

//define sum variable to hold the sum
//for loop from 200 to 2700
//if condition to check if the number is dividable by 3 but not 5 or 5 but not 3
//add the number 
//print the sum
let sum = 0;
for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0 && i % 5 != 0) || (i % 5 === 0 && i % 3 != 0))
        sum += i;
}
console.log(sum);

//2. Shift the Values
//create an algorithm that shifts each number by one to the front.

//define a new array as shiftedArr
//for loop to iterate through the original array
//use unshift method to add the original array elements to the beginning of the shifted array one by one
//print the shifted array

let X = [2, 1, 6, 4, -7];
let shiftedArr = [];
for (let i = 0; i < X.length; i++) {
    shiftedArr.unshift(X[i]);
}
console.log(shiftedArr);

//3. FizzBuzz
//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", 
//the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

//define an empty array
//for loop start with 1 to 135
//if condition to check if the number is dividable by 3 and 5 push 'FizzBuzz' to the new array
//else if dividable by 3 push 'Fizz' to the new array
//else if dividable by 5 push 'Buzz' to the new array
//else push the exact number
//print the array
let array = [];
for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        array.push('FizzBuzz');
    else if (i % 3 === 0)
        array.push('Fizz');
    else if (i % 5 === 0)
        array.push('Buzz');
    else array.push(i);
}
console.log(array);

//4. Fibonacci
//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//define an empty array
//for loop start at 0 to 1000000
//if the number is 0 or 1 then add them to the array
//else add the sum of the last two elements in the array
//print the array
let fibonacci = [];
for (let i = 0; i < 1000000; i++) {
    if (i === 0 || i === 1)
        fibonacci[i] = i;
    else {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
}
console.log(fibonacci);

//5. Remove the Negative
//Given any array X, remove the negative numbers

//define the array
//for loop to iterate through the array
//if condition to check if the element is negative
//true the remove it from the array using splice method
//print the array
let Y = [1, -2, 4, 1];
for (let i = 0; i < Y.length; i++) {
    if (Y[i] < 0){
        Y.splice(i, 1); 
        i -= 1;
    }
}
console.log(Y);

//6. Communist Censorship
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
//Then make your algorithm work for any word of your choice

//define the array
//define a variable that hold the word want to be replaced
//for loop through the array
//if condition to check when the element is the same as the word
//define a variable that will hold the stars
//for loop through the word length
//replace every letter with * then assign the word in the array to the stars 
//print the array 
let x = ['Man', 'I','Love','The','Matrix','Program'];
let word = 'Program'
for (let i = 0; i < x.length; i++) {
    if(x[i] === word){
        let replacedWord = '';
        for (let j = 0; j < x[i].length; j++) {
            replacedWord += '*';            
        }
        x[i] = replacedWord;
    }   
}

console.log(x);

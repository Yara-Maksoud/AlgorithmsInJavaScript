//Game of 3s

//define the game function
//while loop till number is equal to 1
//if condition to check if the number is divisible by 3 
// true print the (number, 0) then divide it by 3
//false then check if the number -1 is divisible by 3 
//else divide number +1 by 3
function gameOfThree(number) {
    while (number > 1) {
        if (number % 3 == 0) {
            console.log(`${number} 0`);
            number /= 3;
        }
        else if ((number - 1) % 3 == 0) {
            console.log(`${number} -1`);
            number = (number - 1) / 3;
        }
        else {
            console.log(`${number} 1`);
            number = (number + 1) / 3;
        }
    }
    console.log(number);
}   

//Call the gameOfThree function
gameOfThree(100);


//Tuesday: Magic Squares

// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15.
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.
// Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. 
//Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, 
//or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.


//define a function that take a 2-dimensional array
//for loop for the rows and other for loop for the column 
//calculate the sum of the arrows and columns then check for each one if equals to 15
//if both of them equal to 15 then calculate the sum of each diagonals and check if they equal to 15
//return true if every sum equal to 15
function magicSquares(array){
    let colSum ;
    let rowSum ;
    
    for (let i = 0; i < 3; i++) {        
        rowSum=0;
        colSum = 0;
        for (let j  = 0; j  < 3; j ++) {
            rowSum += array[i][j];
            colSum += array[j][i];
        }       
        if(rowSum != 15 || colSum != 15 )
            return false;    
    }
    const diagSum1 = array[0][0] + array[1][1] + array[2][2];
    const diagSum2 = array[0][2] + array[1][1] + array[2][0];
    if(diagSum1 != 15 || diagSum2 != 15 )
        return false;

    return true;

}

console.log(magicSquares([[8, 1, 6], [3, 5, 7], [4, 9, 2]]));
console.log(magicSquares([[2, 7, 6], [9, 5, 1], [4, 3, 8]]));
console.log(magicSquares([[3, 5, 7], [8, 1, 6], [4, 9, 2]]));
console.log(magicSquares([[8, 1, 6], [7, 5, 3], [4, 9, 2]]));


//Wednesday : Search and Replace
// Perform a search and replace the sentence using the arguments provided and return the new sentence.
// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).

//define a function with three string parameter
//convert the str to an array 
//for loop through the array
//if statement to check if any array elements match the word
//true then check if the first letter is in upper case so change it with the new word after changing the first letter to upper case
//else change it with first letter in lower case
//convert the array to a string and return it 

function myReplace(str, before, after) {
    let strarr = str.split(" ");
    for (let i = 0; i < strarr.length; i++) {
        if(strarr[i] === before){
            if(strarr[i][0] == strarr[i][0].toUpperCase())
                strarr[i] = after[0].toUpperCase() + after.slice(1);
            else
                strarr[i] = after[0].toLowerCase() + after.slice(1);            
        }        
    }
    return strarr.join(' ');
  }
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

// Thursday: Sum All Primes
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.


//define a function that take number as a parameter
//define two variable sum to hold the sum of all the prime numbers and isPrime to hold true if the number is prime, false if not
//for loop star at 2 end at number
//set isPrime to true then second for loop to check if each number is prime or not
//if statement to check the remain of the division 
//true then the number is not prime and break to go out from the second loop
//if the number is prime then add it to sum and return the sum at the end
function sumPrimes(num) {
    let sum = 0;
    let isPrime;
    for (let i = 2; i <= num; i++) {
        isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && i != j){
                isPrime = false;
                break;
            }
               
        }
        if (isPrime)
            sum += i;
    }
    return sum;
}
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.

//Friday: Sum All Odd Fibonacci

  function sumFibs(num) {
    let prev = 1, current = 1, sum = 0;
  
    while (prev <= num) {
      if (prev % 2 !== 0) {
        sum += prev;
      }
  
      let next = prev + current;
      prev = current;
      current = next;
    }
  
    return sum;
  }
  console.log(sumFibs(1));
  console.log(sumFibs(2));

  console.log(sumFibs(10));

//Monday: Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Create getLargest function to return the largest number in an array
//create the main function that takes an array consists of four array
//define an empty array that will hold the result
//iterate through the arrays and call the getLargest for each element and assign it to the result array

function getLargest(array) {
    max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}

function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = getLargest(arr[i]);
    }
    return result;
}

let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(array));
//Returns [5,27,39,1001]


//Tuesday: Find the longest Word in a String
//Return the length of the longest word in the provided sentence.

//write a function that take a string parameter
//split the string using split function with distance separator and assign it to an array
//define a maxLength variable and assign it to the length of the first element 
//for loop to iterate through the array starting from the second element 
//write if condition to compare each element length with the maxLength variable
//if true assign the larger length to the maxLength variable
//return maxLength variable
function findLongestWord(string) {
    let wordsArr = string.split(" ");
    let maxLength = wordsArr[0].length;
    for (let i = 1; i < wordsArr.length; i++) {
        if (wordsArr[i].length > maxLength)
            maxLength = wordsArr[i].length;
    }
    return maxLength;
}


str1 = "The quick brown fox jumped over the lazy dog";
str2 = "May the force be with you";

console.log(findLongestWord(str1)); // should return 6.
console.log(findLongestWord(str2)); // should return 5.

//Wednesday : Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

//define a function that takes a string para
//convert the sting to an array
//for loop on the array and alter each element by capitalize the first letter using charAt and toUpperCase methods
//add the rest of each word to the first letter and convert it to lower case using slice and toLowerCase methods
//convert the result array to string using join method and return it
function titleCase(str) {
    let strArray = str.split(' ');
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase();
    }
    return strArray.join(' ');
}

console.log(titleCase("I'm a little tea pot"));// should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt"));// should return "Short And Stout".

// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

//define a function that takes an array as a parameter
//define sum variable that hold the sum of the numbers
//define two variable min and max and check which is greater assign it to max and the other to min
//for loop start at min end at max 
//sum all the numbers between min and max and return the result
function sumAll(arr) {
  let sum = 0;
  let min = arr[0];
  let max= arr[1];
  if(arr[0]>arr[1]){
    max = arr[0];
    min = arr[1]
  }
  for (let i = min; i <= max; i++) {
    sum += i;    
  }  
  return sum;

}
console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45









  
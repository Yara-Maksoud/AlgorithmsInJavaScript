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
function findLongestWord(string){
    let wordsArr = string.split(" ");
    let maxLength = wordsArr[0].length;
    for (let i = 1; i < wordsArr.length; i++) {
         if(wordsArr[i].length > maxLength)
            maxLength = wordsArr[i].length;
    }
    return maxLength;
}


str1 = "The quick brown fox jumped over the lazy dog";
str2 = "May the force be with you";  

console.log(findLongestWord(str1)); // should return 6.
console.log(findLongestWord(str2)); // should return 5.


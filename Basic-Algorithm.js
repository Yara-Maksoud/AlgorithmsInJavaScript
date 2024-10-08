
//Monday: JS Basic


//1. Print 1 - 135
//for loop to iterate through number from 1 to 135
//print each number
for (let i = 1; i <= 135; i++) {
    console.log(i);
}

// 2. Print Odd Numbers 1 - 135
//write for loop start from 1 to 135 
//write if condition to validate  the odd condition
//print the number that meet the condition
for (let i = 1; i <= 135; i++){
    if(i%2 != 0)
        console.log(i);        
}

//3. Sum of Printed Numbers
//define a sum variable with 0 as init to hold the sum value 
//write for loop start from 1 to 135 
//add each number to the sum variable 
//print the desired output
let sum = 0;
for (let i = 0; i <= 135; i++) {
    sum += i;
  console.log(`Number is: ${i} Sum: ${sum}`);  
}

//4. Print the elements of an array
//define the array the iterate through the array using for loop
//start from 0 till the length of the array
//print each element of the array
let X = [1,4,2,12];
for (let i = 0; i < X.length; i++) {      
    console.log(X[i]);    
}

// 5. Find Max
//define a max variable that hold the first element of the array
//iterate through the array starting from second element 
//compare each element of the max variable if it grater then assign the big value to max
//print the max
let arr = [-2,-3,-1,0];
let max = arr[0]; 
for (let i = 1; i < arr.length; i++) {    
    if(arr[i] > max)
        max = arr[i]
}
console.log(max);

// 6. Get Average
//define the array and the sum variable
//iterate through the array and calculate the sum of the elements
//print the sum divided by the array length
let array = [2,1,3];
let arrSum = 0;
for (let i = 0; i < array.length; i++) {
    arrSum += array[i];    
}
console.log(arrSum/array.length);

//7. Eliminate the Negatives
//define the array and write for loop to iterate through the elements
//write a condition if the element less than 0 then assign it to 0
let xArray = [2,-1,4,-3];
for (let i = 0; i < xArray.length; i++) {
    if(xArray[i] < 0)
        xArray[i] = 0;
}
console.log(xArray);

//8. Number to String
//define the array and write for loop to iterate through the elements
//write a condition if the element less than 0 then assign it to a string value 'Turing'
let yArray = [1,-4,0,-1];
for (let i = 0; i < yArray.length; i++) {
    if(yArray[i] < 0)
        yArray[i] = 'Turing';
}
console.log(yArray);


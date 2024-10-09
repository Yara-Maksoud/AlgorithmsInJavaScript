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


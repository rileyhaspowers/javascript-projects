const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let userInput = input.question("Enter a number between 1 and 10.")

if (userInput < 1 || userInput > 10){
    let tempStr = str.substring(0,3);
    let tempStr2 = str.substring(3,10);
    
    console.log(`Your number is invalid. My name is ${tempStr2}${tempStr}.`);
} else {
    let tempStr = str.substring(0,(userInput));
    let tempStr2 = str.substring((userInput),10);
    
    console.log(`My name is ${tempStr2}${tempStr}.`);
}



//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below


let shuttleName = "Determination";
let shuttleSpeed = 17500;
let marsKiloDistance = 225000000;
let moonDistance = 38400;
const milesPerKilo = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeed)
console.log(typeof marsKiloDistance);
console.log(typeof moonDistance);
console.log(typeof milesPerKilo);

let milesToMars;
milesToMars = (marsKiloDistance * milesPerKilo);
let hoursToMars = (milesToMars / shuttleSpeed);
let daysToMars;
daysToMars = (hoursToMars / 24);

console.log(shuttleName  + " will take " + daysToMars + " days to reach Mars.");

let milesToMoon;
milesToMoon = (moonDistance * milesPerKilo);
let hoursToMoon = (milesToMoon / shuttleSpeed);
let daysToMoon;
daysToMoon = (hoursToMoon / 24);

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random() * 11);}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random() * 11);}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random() * 11);}
}

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random() * 11);}
} 

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5, 
   move: function () {return Math.floor(Math.random() * 11);}
} 

crewArray = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade]; 

function crewReports(crewAnimal){
   console.log(`${crewAnimal.name} is a ${crewAnimal.species}. They are ${crewAnimal.age} years old and ${crewAnimal.mass} kilograms. Their ID is ${crewAnimal.astronautID}.`)
}

function fitnessTest(inputArray){
   let stepsTemplateArray = [];
      for(i = 0; i < inputArray.length; i++){
         let turns = 0;
         let numSteps = 0;
        while(numSteps < 20){
         numSteps = numSteps + inputArray[i].move();
         turns += 1;
      }
      stepsTemplateArray.push(`${inputArray[i].name} took ${turns} turns to take 20 steps.`)
   }
   return stepsTemplateArray;
}


console.log(crewReports(tardigrade));
console.log(fitnessTest(crewArray));





// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready"; 
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = "clear"; 
let preparedForLiftoff = false;


if(astronautCount <= 7){
        if(astronautStatus === "ready"){
            if(totalMassKg <= maximumMassLimit){
                if(fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp){
                    if(fuelLevel === "100%"){
                        if(weatherStatus === "clear"){
                            preparedForLiftoff = true;
                     } 
                   }
                }

            }
        }
    }
    


if(preparedForLiftoff === true){

    console.log("All systems are go. Initiating space shuttle launch sequence. \n Date: " + date + "\nTime: " + time + "\nAstronaut Count: " + astronautCount);
    console.log("\nCrew Mass: " + crewMassKg + "\nFuel Mass: " + fuelMassKg + "\nShuttle Mass: " + shuttleMassKg + "\nTotal Mass: " + totalMassKg);
    console.log("\nFuel Temperature: " + fuelTempCelsius + "\nWeather Status: " + weatherStatus);
    console.log("Safe travels!");
} else {
    console.log("ABORT MISSION!");}

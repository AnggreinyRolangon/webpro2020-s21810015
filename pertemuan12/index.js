// exercise
  // Convert to ES6 syntax
  // function yearUntilRetirement(year, firstName) {
  //  var age = 28;
  //    va retirement = 65 - age;
  //    if(retirement > 0) {
  //    console.log(firstName + " retired in " + retirement + "years");
  //  } else {
  //    console.log(firstName + " is alreadu retired. ");
  //  }
  // } 

  //ES6
  // Exercise 3

  const yearUntilRetirement = (year, firstName) => {
    let age = 28;
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} will retire in ${retirement} years.`);
    }
    else{
        console.log(`${firstName} has already retired.`);
    }
}

console.log(yearUntilRetirement(2020, "langgreiny"));
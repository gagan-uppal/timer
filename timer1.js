/*Implement an alarm clock / timer which will beep after a specified amount of time has passed.
  The user can specify an unlimited number of alarms using command line arguments
*/

// assume input time is in second
const inputArgs = process.argv.slice(2);
  
//console.log(inputArgs);
  
inputArgs.forEach((time) => {
  //if(inputArgs[time] >= 0 && inputArgs[time] !== NaN) {
    let time1 = Number(time); // converted time to number   => 3,5, NaN

    //if time1 is anumber or not with isNan condition => false, false, true//
    let time2 = isNaN(time1);  
    // if it is not NaN
    if(time2 === false){
      
    }


  if((Number.isNaN(Number(time)) !== true) && (Number(time) >= 0)){

    setTimeout(() => {
      //process.stdout.write('\x07');
        process.stdout.write(`\x07 ${time} `);

    }, time * 1000 );
  //}
  }
    
  
});

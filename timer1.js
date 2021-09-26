/*Implement an alarm clock / timer which will beep after a specified amount of time has passed.
  The user can specify an unlimited number of alarms using command line arguments
*/

// assume input time is in second
const inputArgs = process.argv
  .slice(2)
  
  console.log(inputArgs);
  
inputArgs.forEach((time) => {
  //if(inputArgs[time] >= 0 && inputArgs[time] !== NaN) {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, time );
  //}
  
});

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
//Get a string of all times
  .map(node => node.dataset.time)
//Map over each, split, then convert to a number
  .map(timeCode => {
  const [mins, secs] = timeCode.split(':').map(parseFloat);
  //return an array of each videos total seconds
  return (mins * 60) + secs;
})
//reduce down to get total seconds of all videos
  .reduce((total, vidSeconds) => total + vidSeconds);

//Chop total seconds down to hours, mins, secs
let secondsLeft = seconds;
//Use Math.floor to get a whole number
const hours = Math.floor(secondsLeft / 3600);
// % to get remaining time in seconds
secondsLeft = secondsLeft % 3600;

//Now work out the mins from the total seconds left
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

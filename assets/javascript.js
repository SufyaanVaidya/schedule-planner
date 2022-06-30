// these are my variables that target different things through out my html file
const weekday = moment().weekday();
const date = $('#currentDay');
const time = moment().hour();
const textNine = $('.nine-am');
const textTen = $('.ten-am');
const textEleven = $('.eleven-am');
const textTwelve = $('.twelve-pm');
const textOne = $('.one-pm');
const textTwo = $('.two-pm');
const textThree = $('.three-pm');
const textFour = $('.four-pm');
const textFive = $('.five-pm');
const textSix = $('.six-pm');
const button = $('.btn');

// this function is returning the keys value from the local storage
function timeText(timeKey, timeBlock) {
var timeNine = localStorage.getItem(timeKey);
if (timeNine) {
    timeBlock.text(timeNine)
}
}

// this function is sellecting from the array of days and returning the current day
function convertDay(weekday) {
    const weekArray = ["Sun","Mon", "Tue", "Weds", "Thurs", "Fri", "Sat"]
   return weekArray[weekday];
}

// this function is saying what color the timestamp area will display according to the current time
function hourOf(hour, timeEL) {
    if (time == hour) {
        timeEL.addClass("present");
    } else if (time < hour) {
        timeEL.addClass("future");
    } else if (time > hour) {
        timeEL.addClass("past");
    }
}

// this function is stating that it needs to target the save button click when that button is clicked whatever string is read that is 
// associated with the time block will save and appear everytime the page loads
// each if st5atement will save that individual time block
function onClick(event) {
   const dataTodo = event.target.dataset.section
   if (dataTodo === "nine") {
     const textForNine = textNine.val();
   localStorage.setItem("9:00", textForNine);
}
    if (dataTodo === "ten"){
     const textForTen = textTen.val();
   localStorage.setItem("10:00", textForTen);
}
   if (dataTodo === "eleven") {
    const textForEleven = textEleven.val();
   localStorage.setItem("11:00", textForEleven);
} 
    if (dataTodo === "twelve") {
   const textForTwelve = textTwelve.val();
   localStorage.setItem("12:00", textForTwelve);
}
    if (dataTodo === "one") {
   const textForOne = textOne.val();
   localStorage.setItem("1:00", textForOne);
}
    if (dataTodo === "two") {
   const textForTwo = textTwo.val();
   localStorage.setItem("2:00", textForTwo);
}
    if (dataTodo === "three") {
   const textForThree = textThree.val();
   localStorage.setItem("3:00", textForThree);
}
    if (dataTodo === "four") {
   const textForFour = textFour.val();
   localStorage.setItem("4:00", textForFour);
}
    if (dataTodo === "five") {
   const textForFive = textFive.val();
   localStorage.setItem("5:00", textForFive);
}
    if (dataTodo === "six") {
   const textForSix = textSix.val();
   localStorage.setItem("6:00", textForSix);
}
}



// this is adding an eventlistener to the button element for a click
button.on('click', onClick);

// this is making todays date display in the correct area on the page
date.text(convertDay(weekday));

// these are giving each timeblock their respected time and where to apply the function to
hourOf(9, textNine);
hourOf(10, textTen);
hourOf(11, textEleven);
hourOf(12, textTwelve);
hourOf(13, textOne);
hourOf(14, textTwo);
hourOf(15, textThree);
hourOf(16, textFour);
hourOf(17, textFive);
hourOf(18, textSix);

// this is giving the text areas time values to read
timeText("9:00", textNine);
timeText("10:00", textTen);
timeText("11:00", textEleven);
timeText("12:00", textTwelve);
timeText("1:00", textOne);
timeText("2:00", textTwo);
timeText("3:00", textThree);
timeText("4:00", textFour);
timeText("5:00", textFive);
timeText("6:00", textSix);
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
console.log(convertDay(weekday))

function convertDay(weekday) {
    if (weekday == 0) {
        return "Sun";
    } else if (weekday == 1) {
        return "Mon"
    }else if (weekday == 2) {
        return "Tue"
    }else if (weekday == 3) {
        return "Wed"
    }else if (weekday == 4) {
        return "Thurs"
    }else if (weekday == 5) {
        return "Fri"
    }else if (weekday == 6) {
        return "Sat"
    }
}

function hourOf(hour, timeEL) {
    if (time == hour) {
        timeEL.addClass("present");
    } else if (time < hour) {
        timeEL.addClass("future");
    } else if (time > hour) {
        timeEL.addClass("past");
    }
    console.log(hour)
}

function onClick() {
    console.log("ssdgf")
   const textForNine = textNine.val();
   localStorage.setItem("9:00", textForNine);
   const textForTen = textTen.val();
   localStorage.setItem("10:00", textForTen);
   const textForEleven = textEleven.val();
   localStorage.setItem("11:00", textForEleven);
   const textForTwelve = textTwelve.val();
   localStorage.setItem("12:00", textForTwelve);
   const textForOne = textOne.val();
   localStorage.setItem("1:00", textForOne);
   const textForTwo = textTwo.val();
   localStorage.setItem("2:00", textForTwo);
   const textForThree = textThree.val();
   localStorage.setItem("3:00", textForThree);
   const textForFour = textFour.val();
   localStorage.setItem("4:00", textForFour);
   const textForFive = textFive.val();
   localStorage.setItem("5:00", textForFive);
   const textForSix = textSix.val();
   localStorage.setItem("6:00", textForSix);
}


button.on('click', onClick);
date.text(convertDay(weekday));
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

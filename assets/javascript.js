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
const textSixPm = $('.six-pm');
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
   const text = textNine.val();
   localStorage.setItem("string", text);
   const textTest = textSixPm.val();
   localStorage.setItem("stringg", textTest);
}


button.on('click', onClick);
date.text(convertDay(weekday));
hourOf(21, textNine);
hourOf(22, textSixPm);

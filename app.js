const vacationDate = "21 November 2021";
const futureDate = new Date(vacationDate);


// countdown function:

function countdown() {

    // countdown:

    // variables:
    const currentDate = new Date();

    // date difference:
    let dateDifference = futureDate - currentDate;

    // Millseconds calculations for different times:
    let milliDays = 1000 * 60 * 60 * 24;
    let milliHours = 1000 * 60 * 60;
    let milliMinutes = 1000 * 60;
    let milliSeconds = 1000;

    // Getting the millisecond conversions:
    let getDays = Math.floor(dateDifference / milliDays) % 365;
    let getHours = Math.floor(dateDifference / milliHours) % 24;
    let getMinutes = Math.floor(dateDifference / milliMinutes) % 60;
    let getSeconds = Math.floor(dateDifference / milliSeconds) % 60;

    // final results:
    let days = document.querySelector(".days").innerHTML = getDays;
    let hours = document.querySelector(".hours").innerHTML = getHours;
    let minutes = document.querySelector(".minutes").innerHTML = getMinutes;
    let seconds = document.querySelector(".seconds").innerHTML = getSeconds;

    if(days < 0 && hours < 0 && minutes < 0 && seconds < 0){
        document.querySelector(".days").innerHTML = "0";
        document.querySelector(".hours").innerHTML = "0";
        document.querySelector(".minutes").innerHTML = "0";
        document.querySelector(".seconds").innerHTML = "0";
        alert("Vacation Day!");
    }
    
}

function generateBackground(){
    const bgArray = ["1", "2", "3", "4", "5", "6"];
    const randomBg = bgArray[Math.floor(Math.random() * bgArray.length)];
    const backgroundImg = document.body.style.backgroundImage = `url(/img/bg${randomBg}.jpg)`;
    document.body.style.opacity = 1;
}


// Countdown/Bg Image millisecond speed:
setInterval(countdown, 1000);
setInterval(generateBackground, 3000);
"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Zahriya Carter
   Date:   1/10/2024

*/



runClock();
setInterval("runClock()", 1000);

/* Store the current date and time */
function runClock() {
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();



/* Display the current data and time */
document.getElementById("dateNow").innerHTML =
dateStr + "<br />" + timeStr;

/* Calculate the days until January 1st */
var newYear = new Date("January 1, 2018");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);

/* Calculate the hours left in the current days */
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

/* Calulate the minutes and seconds left in the current hour */
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}
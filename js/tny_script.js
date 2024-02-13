"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Zahriya Carter
   Date:   1/10/2024

*/

/* Store the current date and time */
var currentDay = new Date("May 23, 2018 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current data and time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days until January 1st */
var newYear = new dateStr("January 1, 2018");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);

/* Calculate the hours left in the current days */
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

/* Calulate the minutes and seconds left in the current hour */
var minsLeft = (hrsLeft)

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor("daysLeft");
document.getElementById("hrs").textContent = Math.floor(daysLeft);
document.getElementById("mins").textContent = Math.floor(hrsLeft);
document.getElementById("secs").textContent = "ss";

/*
DATES: Date objects let us work with dates.
*/

// Creating Date Objects.
new Date();

// new Date(): creates a date object with the current date and time.
let currentTime = new Date();
console.log(currentTime);

// .toString(): automatically converted to a string.
console.log(currentTime.toString());

// .toDateString(): method converts a date to a more readable format.
console.log(currentTime.toDateString());

// .toUTCString(): method converts a date to a string using the UTC standard.
console.log(currentTime.toUTCString());

// .toISOString(): method converts a dat to a string using the ISO standard.
console.log(currentTime.toISOString());

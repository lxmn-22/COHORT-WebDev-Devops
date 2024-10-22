/* 
ASYNCHRONOUS CODE: processes or functions running parallel with another functions.
    callback functions \\ promises \\ async await. 

Problem: How will someone know the code is async or sync?
If the code consists any of the following, the code is "async", otherwise "sync".

NOTE: WEB API's: setTimeout() \\ setInterval() \\ promises \\ fetch \\ axios \\ XMLHttpRequest \\ Geolocation API \\ 
    Web storage API || URL API, etc.
*/

// Task01
console.log(`"Task01"-start.`);

// Task02
setTimeout(() => {
    console.log(`"Task02"-inside setTimeout function.`);
}, 2000);

// Task03
console.log(`"Task03"-end.`);
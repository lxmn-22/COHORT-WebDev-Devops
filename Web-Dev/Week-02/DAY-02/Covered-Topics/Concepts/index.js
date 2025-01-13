/* 
- PROMISE: An object that represents the "eventual completion or failure" of an async 
operation & its resulting value. 
- used to handle async operations more effectively than traditional callback functions.
*/
function random(resolve) {
  setTimeout(resolve, 3000);
}

let p = new Promise(random);
// console.log(p);

function callback() {
  console.log("promise succeded");
}
p.then(callback);

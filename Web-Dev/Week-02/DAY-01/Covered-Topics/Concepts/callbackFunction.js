/*
 CALLBACK FUNCTION: 
    - A function that is passed as an arguement to another function, executed after the completion of that function.
    - A way to handle "async" operations, like reading files, making API calls or setting timers.
 */


// Regular function.
function greet(name) {
    console.log(`Hi, ${name}.`);
}
// greet("Laxman");

// Regular function with callback function as parameter.
function greet(name, callback) {
    console.log(`Hi, ${name}.`);
    callback();
}

// Callback function.
function callMe() {
    console.log(`I'm a callback function.`);
}

// invoking regular function.
greet("Laxman Koranga", callMe);

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data Fetched!");
        // calling the callback function.
        callback();
    }, 2000);
}

function processData() {
    console.log("Data Processed!");
}

// fetchData(processData);
// console.log(fetchData(processData));

/*
    CALLBACK HELL:
    - A situation where multiple nested callbacks are used in async programming, leading to code that is difficult to read,
        understand and maintain.
    - We need to perform multiple async operations sequentially, each depending on the result of the previous one.
*/

// going to BurgerKing.
// order burger to waiter.
// waiter note down the orders.
// chef gets the order detail.
// order prep will be started by chef.
// order is prepared.
// waiter gets the prepared order.
// we'll get the order from waiter.

// Task01-5sec
function headingBurgerKing() {
    setTimeout(() => {
        console.log("Heading to Burger King.");
        setTimeout(() => {
            console.log("Ordering Burger.");
            setTimeout(() => {
                console.log("Waiter takes the order.");
                setTimeout(() => {
                    console.log("Chef gets the order.");
                    setTimeout(() => {
                        console.log("Your order is getting prepared.");
                        setTimeout(() => {
                            console.log("Your order is Ready.");
                        }, 1000);
                    }, 9000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 5000);
}

// Task02-2sec
function orderFood() {
    setTimeout(() => {
        // console.log("Ordering Burger.");
    }, 2000);
}
// Task03-1sec
function waiterTakingOrder() {
    setTimeout(() => {
        // console.log("Waiter takes the order.");
    }, 1000);
}
// Task04-1sec
function chefGetsOrder() {
    setTimeout(() => {
        // console.log("Chef gets the order.");
    }, 1000);
}
// Task05-9sec
function orderPreparation() {
    setTimeout(() => {
        // console.log("Your order is getting prepared.");
    }, 9000);
}
// Task06-1sec
function orderIsReady() {
    setTimeout(() => {
        // console.log("Your order is Ready.");
    }, 1000);
}

headingBurgerKing();
// orderFood();
// waiterTakingOrder();
// chefGetsOrder();
// orderPreparation();
// orderIsReady();

function task1(callback) {
    setTimeout(() => {
        console.log("Task1 completed.");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task2 completed.");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task3 completed.");
        callback();
    }, 1000);
}

// function greet() {
//     console.log("Hello, Callback");
// }

// task1(greet);

task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed.");
        });
    });
});
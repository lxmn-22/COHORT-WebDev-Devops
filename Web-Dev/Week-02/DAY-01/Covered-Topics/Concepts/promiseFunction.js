/*
    PROMISE:
    - Introduced to address the issues of callback hell, providing more manageable way to handle async operations.
*/

// Creating Promise.

new Promise((resolve, reject) => {
    // async code
});


function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task1 complete.");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task2 complete.");
            resolve();
        }, 1000);
    })
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task3 complete.");
            resolve();
        }, 1000);
    })
}

// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => {
//         console.log("All Task completed.");
//     });

function checkEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Yes, it's even number.");
        } else {
            reject("No, it's odd number.");
        }
    })
}

// console.log("The given number is:", checkEven(22));
// console.log("The given number is:", checkEven(21));

checkEven(12).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});


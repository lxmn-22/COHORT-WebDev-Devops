// Variable declaration:

// variable that can be reassigned.
let name = "Laxman Singh Koranga";

// constant variable that cannot be reassigned.
const age = 21;

// older way to declare variables, function scoped.
var isStudent = true;

/* 
ASSIGNMENT: Create a variable for each of the following: your favorite color, your height in 
cms, and whether you like pizza. Use appropriate variable declarations(let, const, or var). 
Try logging it using console.log
*/

let favoriteColor = "Red";
const height = 168;
var likePizza = false;

// console.log("What is your favorite color?", favoriteColor, "\n", " your height?", height, "\n", "do you like pizza", likePizza);

// DATA-TYPES:

// Number.
let number = 3;

// String.
let string = "Hello, JS!";

// Boolean.
let isActive = true;

// Array.
let numbers = [1, 2, 3];

// OPERATORS:

// ARITHMETIC OPERATORS:
let addition = (22 + 11);
let subtraction = (22 - 11);
let multiplication = (22 * 11);
let division = (22 / 11);
let modulus = (22 % 11);
let exponentiation = (5 ** 3);

// Increment operator.
let a = 22;
a++;
let z = a;                      // Output: 23

// Decrement operator.
let b = 22;
b--;
let y = b;                      // Output: 21

// console.log(y);

// ASSIGNMENT OPERATORS:
a = b
a += b
a -= b
a *= b
a /= b
a %= b
a **= b

// BITWISE ASSIGNMENT OPERATORS:
a &= b
a ^= b
a |= b

// NULL Coalescing Operator:

// let p = 3;               // When value is assigned, output: 3
let p;                      // when value is not assigned, output: 33
p ??= 33;

// console.log(p);             

/*
ASSIGNMENT #1: Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/
function sum(a, b) {
    let result = a + b;
    return result;
}

// console.log("Sum:", sum(22, 11));

function add(a, b) {
    let result = a + b;
    return result;
}

// console.log("Add:", add("twenty-two", 11));


/*
ASSIGNMENT #02: Write a function called canVote that returns true or false if the age of a 
user is > 18.
*/

function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// console.log("Is the user above or equal to voting age: ", canVote(27));
// console.log("Is the user above or equal to voting age: ", canVote(18));
// console.log("Is the user above or equal to voting age: ", canVote(15));

/*
ASSIGNMENT #03: Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

// let num = 22;

// if (num % 2 == 0) {
//     console.log(num, "is even.");
// } else {
//     console.log(num, "is odd.");
// }

/*
ASSIGNMENT #04: Write a function called sum that finds the sum from 1 to a number.
*/

function summation(N) {
    let result = 0;

    for (let i = 0; i <= N; i++) {
        result += i;
    }
    console.log("The sum of", N, "numbers is:", result);
}
// summation(100);

// OBJECTS:

let user = {
    name: "Virat",
    age: 35
}

// console.log(user.name, "age is:", user.age);

/*
ASSIGNMENT #05: Write a function that takes a "user" as an input and greets them with their name 
and age.
*/

function greeting(User) {
    // Naive me!
    // console.log("Good Morning", User.name, "\nDo you mind if I ask, how old are you?", User.age);

    console.log(`Good Morning, ${User.name}.\nDo you mind if I ask, how old are you? ${User.age}`);
}
let User = {
    name: "M.S.Dhoni",
    age: 43
}
// greeting(User)

/*
ASSIGNMENT #06: Write a function that takes a new object as input which has name , age  and gender 
and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21).
*/

function greetGuest(guest) {
    // naive me!
    // console.log("Hi,", guest.title, ".", guest.name, ", your age is", guest.age);
    if (age >= 18) {
        console.log(`Hello, ${guest.title} ${guest.name}, your age is ${guest.age} and you are eligible to vote.`);
    } else {
        console.log(`Hello, ${guest.title} ${guest.name}, your age is ${guest.age}, sorry you are not eligible to vote.`);
    }
}

let guest = {
    name: "Harkirat",
    age: 30,
    title: "Mr."
}
// greetGuest(guest)

// ARRAYS:

const fruits = ["apple", "mango", "pine-apple"];
const totalFruits = fruits.length;
const firstFruit = fruits[0];

// console.log(fruits);
// console.log(totalFruits);
// console.log(firstFruit);

/*
ASSIGNMENT #07: Write a function that takes an array of numbers as input, and returns a new array 
with only even values. Read about filter in JS.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNum = arr.filter(arr => arr % 2 === 0);

// console.log(`Even elements: ${evenNum}`);

// ARRAY OF OBJECTS:

const Users = [
    { name: "Harkirat", age: 30 },
    { name: "Raman", age: 22 },
    { name: "Dev", age: 55 },
    { name: "Ashish", age: 15 },
    { name: "Himanshu", age: 18 }
]

const User1 = Users[0].name;
const User1Age = Users[0].age;

// console.log(`First user name is ${User1} and his age is ${User1Age}.`);

/*
ASSIGNMENT #08: Write a function that takes an array of users as inputs and returns only the users
who are more than 18 years old.
*/

function adultPeoples(peoples) {
    return peoples.filter(people => people.age > 18);
}

const peoples = [
    { name: "Harkirat", age: 30 },
    { name: "Raman", age: 22 },
    { name: "Dev", age: 55 },
    { name: "Ashish", age: 15 },
    { name: "Himanshu", age: 18 }
];

const elderPeople = adultPeoples(peoples);
// console.log(`People who are above 18 years:`, elderPeople);

// OBJECT OF OBJECTS: 

const person1 = {
    name: "Harkirat",
    age: 30,
    address: {
        city: "Delhi",
        country: "India",
        address: "1122 DLF"
    }
}

const city = person1.address.city;
// console.log(city);

/*
ASSIGNMENT #09: Create a function that takes an array of objects as input, and returns the users 
whose age > 18 and are male.
*/

function adultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === 'male');
}

const users = [
    { name: 'Anushka', age: 17, gender: 'female' },
    { name: 'Balwant', age: 22, gender: 'male' },
    { name: 'Charu', age: 18, gender: 'male' },
    { name: 'Deepak', age: 19, gender: 'male' },
    { name: 'Sanjana', age: 25, gender: 'female' }
];

const elderMales = adultMales(users);
console.log(elderMales);

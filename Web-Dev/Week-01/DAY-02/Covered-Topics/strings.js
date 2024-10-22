// NOTE: Strings are immutable, cannot be changed only replaced.
// strings methods return a new string, don't modify the original string.

// STRINGS: stores text within quotes. 
var str = "Your name?";
var str1 = 'Laxman Singh Koranga';

// We can use both single or double quotes for storing strings.

// Template String: introduced in ES6, strings enclosed in backticks(``), allows single & double quotes inside a string.
// Template string supports multi-line string.
let para = `"Harkirat" teaches in a best possible manner.`;
let text =
    `
The quick brown 
fox jumps over 
the lazy dog.
`;
// console.log(para);
// console.log(text);

// Escape characters: helps to place the single or double apostrophes inside the string content.
let description1 = "He is a \'freelancer\', open-source contributor and full time tutor.";
// console.log(description1);
let description2 = "He is a \"freelancer\", \"open-source contributor\" and full time tutor.";
// console.log(description2);

// Strings as objects: strings are primitive values, created from literals, but defined as objects using "new" keyword.
let a = "Deepak";
let b = new String("Himanshu");

// NOTE: Do not create strings objects, "new" keyword complicates the code & slows down the excution speed.
// NOTE: Javascript Objects cannot be compared always return false.

// STRING METHODS: produce a new string  without altering the original string.

// 01> Length: returns length of the string.
let description = "He is a freelancer, open-source contributor and full time tutor.";
// console.log("The length of the string:", description.length);

// Extracting string characters: at(position) \\ charAt(position) \\ charCodeAt(position) \\ Property Access[].

let letter = description.at(12);
// console.log("Letter at index[12]:", letter);

let char = description.charAt(0);
// console.log("Char at index[0]:", char);

let char1 = description.charCodeAt(6)
// console.log("Char code at index[6]:", char1);            // returns a UTF-16 code.

let string = "Hello Javascript";
let c = string[6];
// console.log("Char at index[6]:", c);

// EXTRACTING STRING PARTS: slice(start, end) \\ substring(start, end) \\ substr(start, end).

// slice(): extracts a part of a string & returns to a new string, end arguement is excluded in the result.
let part = string.slice(1, 5);
// console.log(part);

// substring(): similar to slice(), only diff is start & end values less than 0 are treated as 0.
let part1 = string.substring(6, 10);
// console.log(part1);

// substr(): similar to slice(), second parameter specifies the length of the expected part.
let part2 = string.substr(6, 1);                // Deprecated.
// console.log(part2);

// CONVERTING TO UPPER & LOWERCASE.

// toUpperCase()
let capitalLetter = string.toUpperCase();
// console.log(capitalLetter);

// toLowerCase()
let smallLetter = string.toLowerCase();
// console.log(smallLetter);

// concat(): joins two or more strings.
let firstName = "Laxman";
let lastName = "Koranga";
let fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// trim(): removes whitespaces from both sides of a string.
let text1 = "           Hola, Amigo!            ";
// console.log(text1);

// trimStart(): removes whitespaces from start.
// console.log(text1.trimStart());

// trimEnd(): removes whitespaces from end.
// console.log(text1.trimEnd());

// replace(): replaces a specified value with another value in a string.

let text2 = "Please, Visit India!";
// console.log(text2.replace("India", "New Zealand"));

// replaceAll(): changes all the occurence to second arg.
let animal = "cats, dogs, pets, pets , parrot, pets, eagle, pets";
// console.log(animal.replaceAll("pets", "lion"));

// search(): a string for a string(regular expression) and returns the position of the match.
let text3 = "Please locate where 'locate' occurs!";
// console.log(text3.search("locate"));

// includes(): returns true if a string contains a specified value, otherwise returns false.
let text4 = "Hello world, welcome to the universe.";
console.log(text4.includes("world"));

// startsWith() \\ endsWith()

// TEMPLATES: introduced in ES6, strings enclosed in backticks(``), allows single & double quotes inside a string, supports multi-line string.
// Backticks syntax(``) \\ Quotes Inside strings \\ Multiline Strings \\ Interpolation \\ Variable Substitutions \\
// Expression Substitution \\ HTML Templates
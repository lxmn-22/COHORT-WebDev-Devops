/*
    MAPS:
    - holds key-value pairs where the keys can be any datatype.
    - remembers the original insertion order of the keys.
*/

/*
 Creating a Map:
 1. Passing an Array
 2. using Map.set()
*/

const avengers = new Map([
    ["Captain America", 1],
    ["Ironman", 10],
    ["Black Widow", 1],
    ["Thor", 1]
]);
console.log(avengers);

const grocery = new Map();

grocery.set("Rice bags", 3);
grocery.set("Wheat", 9);
grocery.set("Dalia packets", 10);
grocery.set("Sugar", 4);
grocery.set("Salt", 12);

console.log(grocery);
console.log(grocery.get("Wheat"));

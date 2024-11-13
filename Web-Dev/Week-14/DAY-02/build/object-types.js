"use strict";
// TS has a specific syntax for typing objects.
const car = {
    type: "Ford",
    model: "Mustang",
    year: 1996
};
// ------------------------------------------------------------------------------
// Optional Properties
// properties that don't have to be defined in the object definition.
const car1 = {
    type: "Volkswagon",
};
car1.mileage = 2000;
const car2 = { type: "Ford", model: "Eco-Sport", year: 2012 };
console.log(car2);
console.log(car2.type);
console.log(car2.model);
const rectangle = {
    length: 22,
    width: 11
};
const area = rectangle.length * rectangle.width;
console.log(`Area of Rectangle: ${area}`);
const ColorRectangle = {
    length: 20,
    width: 10,
    color: "green"
};
const colorArea = ColorRectangle.length * ColorRectangle.width;
console.log(`Area of Rectangle: ${colorArea}, of color ${ColorRectangle.color}.`);

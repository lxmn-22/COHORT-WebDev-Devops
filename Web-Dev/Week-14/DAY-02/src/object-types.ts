// TS has a specific syntax for typing objects.

const car: { type: string, model: string, year: number} = {
    type: "Ford",
    model: "Mustang",
    year: 1996
};
// ------------------------------------------------------------------------------
// Optional Properties
// properties that don't have to be defined in the object definition.
const car1: { type: string, mileage?: number } = {
    type: "Volkswagon",
};
car1.mileage = 2000;

// Instead, use Interfaces.
// ------------------------------------------------------------------------------
interface Car {
    type: string;
    model: string;
    year: number;
}
const car2: Car = { type: "Ford", model: "Eco-Sport", year: 2012 };
console.log(car2);
console.log(car2.type);
console.log(car2.model);

// ------------------------------------------------------------------------------
interface Rectangle {
    length: number,
    width: number
}
const rectangle: Rectangle = {
    length: 22,
    width: 11
}
const area = rectangle.length * rectangle.width
console.log(`Area of Rectangle: ${area}`);
// ------------------------------------------------------------------------------
interface colorRectangle extends Rectangle {
    color: string
}
const ColorRectangle: colorRectangle = {
    length: 20,
    width: 10,
    color: "green"
}
const colorArea = ColorRectangle.length * ColorRectangle.width;
console.log(`Area of Rectangle: ${colorArea}, of color ${ColorRectangle.color}.`);

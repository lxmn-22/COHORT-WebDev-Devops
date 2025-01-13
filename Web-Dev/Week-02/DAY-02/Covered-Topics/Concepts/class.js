/*
    CLASSES:
    - Introduced in ES6, 2015.
    - Class is not an object, instead blueprints for objects.
*/

// Syntax:

class Car {
  // always add constructor().
  constructor(name, model, manufactureYear) {
    this.name = name;
    this.model = model;
    this.manufactureYear = manufactureYear;
  }
  // Methods.
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

// The constructor method is called automatically when a new object is created.
// used to initialize object properties.
// If constructor were not defined, JS will add an empty constructor method.

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  perimeter() {
    const perimeter = 2 * (this.width + this.height);
    return perimeter;
  }
  print() {
    console.log(`Painting with color: ${this.color}`);
  }
}

const rect = new Rectangle(22, 11);
const area = rect.area();
const perimeter = rect.perimeter();
// console.log("Area of rectangle:", area);
// console.log("Perimeter of rectangle:", perimeter);

/*
    Inheritence in Classes
    - To create a class inheritance, use the "extends" keyword.
    - A class created with a class inheritance inherits all the methods from another class.
 */

// Creating a base shape class.

class Shape {
  constructor(color) {
    this.color = color;
  }
  paint() {
    console.log(`Painting with color ${this.color}.`);
  }
  area() {
    throw new Error("The area method must be implemented in the subclass.");
  }
  perimeter() {
    throw new Error(
      "The perimeter method must be implemented in the subclass."
    );
  }
  getDescription() {
    return `A shape with color ${this.color}.`;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  getDescription() {
    return `A circle with radius ${this.radius} and color ${this.color}.`;
  }
  paint() {
    return `Painting with color ${this.color}.`;
  }
}
const c1 = new Circle(3, "blue");
// console.log("The area of Circle:", c1.area());
// console.log("The perimeter of Circle:", c1.perimeter());
// console.log("About Circle:", c1.getDescription());
// console.log("Color of Circle:", c1.paint());

class Square extends Shape {
  constructor(side, color) {
    super(color);
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
  perimeter() {
    return 4 * this.side;
  }
  getDescription() {
    return `A Square with side ${this.side} and color ${this.color}.`;
  }
  paint() {
    return `Painting with color ${this.color}.`;
  }
}
const s1 = new Square(5, "red");
// console.log("The area of Square:", s1.area());
// console.log("The perimeter of Square:", s1.perimeter());
// console.log("About Square:", s1.getDescription());
// console.log("Color of Square:", s1.paint());

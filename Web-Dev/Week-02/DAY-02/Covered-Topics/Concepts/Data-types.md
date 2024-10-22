# Datatypes in Javascript

## Primitive Types
- Basic types and immutable(can't be changed once initialized.)

### 1. Number
    - Represents both integer and floating-point numbers.
    Eg: 33, 3.14, Infinity, NaN.

### 2. String
    - Represents textual data.
    Eg: "Hello, World!", "Javascript".

### 3. Boolean
    - Represents a logical entity and can have two values: true and false.

### 4. Undefined
    - Represents a variable that has been declared but not yet assigned a value.
    Eg: let x;          // x is undefined.

### 5. Null
    - Represents the intentional absence of any object value.
    Eg: let x = null;

### 6. Symbol
    - Represents a unique and immutable identifier.
    Eg: let s = Symbol("description");

### 7. BigInt
    - Represents integers with arbitrary precision.
    Eg: let big = 1212312312963981239129312691839898899n;

## Non-Primitive Types
    - Complex types, mutable and can hold collections of data.

### 1. Object
    - A collection of key-value pairs.
    - Represents entities like users, items, etc.
    Eg: let person = {
        name: "Laxman",
        age: 21;
    };

### 2. Array
    - Used to store ordered collections of values(any type).
    Eg: let array = [1,2,5,5,3];

### 3. Function
    - object that can be called or invoked.
    Eg: function greet() {
        console.log("Hello!");
    }
    greet();

### 4. Date
    - Represents date and time.
    Eg: let date = new Date();

### 5. RegExp
    - represents regular expressions, used for pattern matching in strings.
    Eg: let pattern = /hieg\/;

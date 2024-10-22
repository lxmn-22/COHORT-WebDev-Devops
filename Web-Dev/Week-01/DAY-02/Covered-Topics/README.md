# JAVASCRIPT
- every website we see has a bunch of HTML, CSS & JS files along with media assests(images,audios, videos, etc).

## Facts/Callouts
    1. React, NextJS are frameworks . They compile down to HTML, CSS, JS in the end. That is what your browser understands.
    2. When you run your C++ code on leetcode , it does not run on your browser/machine. It runs somewhere else. Your browser can’t (almost) compile and run C++ code.
    3. If someone asks — What all languages can your browser interpret, the answer is HTML, CSS, JS and WebAssembly. It can, technically, run C++/Rust code that is compiled down to Wasm.

### Before we proceed, do one of the following - 
    - Create an account on replit.
    - Install Node.js locally. ✅
    - Keep your browser console open for testing locally.

# Properties of JS:
    1. Interpreted Language.
        - It excutes code line by line at runtime by the JS engine in the browser or server environment, rather than being compiled into machine code beforehand. 
        * Pros:
            - one less step to do(binary) before running the code.
        * Cons:
            - Performance overhead.
            - More prone to runtime errors.

    2. Dynamically Typed.
        - variable in JS are not bound to a specific data type.
        - Type determined at runtime and can change as the program executes.
    
    3. Single Threaded.
        - It processes one task at a time.

    4. Garbage Collected.
        - automatically manages memory allocation and deallocation through garbage collection, which helps prevent memory leaks by automatically reclaiming memory used by objects no longer in use.

# Conclusion
### Is JS a good language?
Yes and no. It is beginner friendly, but has a lot of performance overhead. Bun is trying to solve for a lot of this, but there’s a long way to go before JS can compete with languages like C++/Rust.

## Syntax of JS:
    1. Variables.
        - container which is used to store data.
        - can declare variables using "var", "let" and "const".
    
    2. Datatypes.
        - Numbers
        - String
        - Boolean
        - Array

    3. Operators.
        - Arithmetic Operators.
        - Comparison Operators.
        - Logical Operators.
    
    4. Functions.
    5. If/Else.
    6. Loops.
    7. Objects.
        - a collection of "key-value" pairs.
        - each "key" is a string & each "value" can be any valid JS data-type, including another object.

        1. Arrays
            -filter method
                - used to create a new array with elements that pass a test provided by a function.
                - doesn't modify the original array elements but returns a new array.
                - useful to filter even numbers, objects based on property.
        2. Array of Objects.
        3. Object of Objects.
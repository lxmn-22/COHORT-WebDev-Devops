# Functional Arguments
- values passed to a function when it's invoked.

### 1. Basic Function Arguments
- pass args before invoking the function.
### 2. Multiple Arguments
- can accept multiple args.
### 3. Default Parameters
- allows us to set default values for parameters in case no args is provided.
### 4. The "arguments" Object
- inside any function, we can access an "arguments" object that contains all the arguments passed to the function, this object is array-like but not actual array, neither have array methods.
### 5. Rest Parameters
- allow us to represent an indefinite no.of args as an array, more flexible & modern than using the "arguments" object.
### 6. Passing functions as Arguments(Callbacks)
- functions passed as args to other functions, called callback functions.
### 7. Anonymous Functions as Arguments
- pass anonymous functions directly as args.
### 8. Passing Objects and Arrays as Arguments
- pass objects and arrays as args to functions.
### 9. Destructuring Function Arguments
- destructure objects or arrays passed as arguments directly in the function signature.

## Arrow Function
- introduced in ES6.
- allow us to write shorter function syntax.
- "this" is also different in arrow functions compared to regular functions.
- with arrow functions there are no binding of "this" but it always repesent the object that defined the arrow function.
/*
  Write a function `findLargestElement` that takes an array of numbers and 
  returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // return undefined for empty array.
    if (numbers.length == 0) {
        return undefined;
    }
    // first element of an array as largestElement.
    let largestElement = numbers[0];

    // Iterate throgh the array.
    for (let i = 0; i < numbers.length; i++) {
        // update largestElement, if current element is greater.
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    }
    return largestElement;
}

module.exports = findLargestElement;
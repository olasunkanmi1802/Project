import { filterEvenNumbers } from "./src/evenNumbers.js";
import { sumNumbers } from "./src/sumNumbers.js";
import { flattenArray } from "./src/flattenArray.js";
import { createTypedArray } from "./src/typedArray.js";
import { convertToTypedArray, convertFromTypedArray } from "./src/convertTypedArray.js";

// Test data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nestedArray = [[1, 2], [3, 4], [5]];

// Test even number filtering
console.log("Even Numbers:", filterEvenNumbers(numbers));

// Test sum of numbers
console.log("Sum of Numbers:", sumNumbers(numbers));

// Test array flattening
console.log("Flattened Array:", flattenArray(nestedArray));

// Test TypedArray functions
createTypedArray();

// Convert array to TypedArray and back
const typedArr = convertToTypedArray(numbers);
console.log("Converted to TypedArray:", typedArr);

const regularArr = convertFromTypedArray(typedArr);
console.log("Converted back to regular array:", regularArr);

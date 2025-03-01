// 1️⃣ Function to calculate the sum of two numbers
function sum(a, b) {
    return a + b;
}
console.log("Sum of 5 and 3:", sum(5, 3));  // Logs: Sum of 5 and 3: 8

// 2️⃣ Program to print “Hello, World!” and log the current date
console.log("Hello, World!");  // Logs: Hello, World!
console.log("Current Date:", new Date().toLocaleString());  // Logs the current date and time

// 3️⃣ Program to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);  // Logs: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// 4️⃣ Function to find the largest number in an array
function findLargestNumber(arr) {
    if (arr.length === 0) return "Array is empty";  // Handles empty arrays
    return Math.max(...arr);  // Finds the largest number in the array
}

const numbers = [10, 5, 22, 8, 35, 2];
console.log("Largest Number:", findLargestNumber(numbers));  // Logs: Largest Number: 35


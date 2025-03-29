const student = require("./src/student");
const greetStudent = require("./src/greet");
const getFullResponseFromAPI = require("./src/api");

// Greet the student
console.log(greetStudent(student));

// Test the API function
getFullResponseFromAPI(true)
  .then(response => console.log(response))
  .catch(error => console.log(error.message));

getFullResponseFromAPI(false)
  .then(response => console.log(response))
  .catch(error => console.log(error.message));

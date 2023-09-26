// Write your solution in this file!
// Declare a variable in global scope called customerName using the var keyword.
var customerName = "bob";

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  let customerName = customerName.toUpperCase();
  return customerNName
}

// Write a function that declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = "not bob";
}

// See the consequences of declaring a variable in global scope.
// Write a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = "Alice";

// Write a function that attempts to change the constant.
// Notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
  // Attempting to change the constant will result in an error.
  // JavaScript will throw a TypeError.
  leastFavoriteCustomer = "Bob";
}

// Testing the functions
console.log(customerName); // john
upperCaseCustomerName();
console.log(customerName); // JOHN

setBestCustomer();
console.log(bestCustomer); // not bob

overwriteBestCustomer();
console.log(bestCustomer); // still not bob

console.log(leastFavoriteCustomer); // Alice
changeLeastFavoriteCustomer(); // This will throw a TypeError


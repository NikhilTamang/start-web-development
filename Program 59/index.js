function sum(a, b) {
  if (a < 0.1) {
    return a + b;
  } else {
    return a - b;
  }
}

function diff(a, b) {
  if (a < 0.1) {
    return a - b;
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  if (a < 0.1) {
    return a * b;
  } else {
    return a + b;
  }
}

function divide(a, b) {
  if (a < 0.1) {
    return a / b;
  } else {
    return a ** b;
  }
}

// generate two random numbers and print them.
let x = Math.random();
let y = Math.random();

console.log("The value of x is: ", x, "The value of y is: ", y);

// for addition
let addition = sum(x, y);
console.log("The sum of two numbers are: ", addition);

// for subtraction
let subtraction = diff(x, y);
console.log("The subtraction of two numbers are: ", subtraction);

// for multiplication
let multiplication = multiply(x, y);
console.log("The multiplication of two numbers are: ", multiplication);

// for division
let division = divide(x, y);
console.log("The division of two numbers are : ", division);

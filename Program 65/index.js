// This is the way to find factorial using for loop
let input = prompt("Enter the number to find its factorial:");
let factorial = 1;

for (let i = input; i > 0; i--) {
  factorial *= i;
}
console.log(`The factorial of ${input} using for loop is : ${factorial}`);

// This is the way to find factorial using reduce()
let number = [7, 6, 5, 4, 3, 2, 1];
let factorial1 = (a, b) => {
  return a * b;
};
let fact = number.reduce(factorial1);

console.log(
  `The factorial of array ${number.join("-")} using reduce() is: ${fact}`
);

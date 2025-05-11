let a = 7;
let b = 5;

// Using reduce()
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr.slice(1));

  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });

  return c;
}

let result = factorial(a);
console.log("Factorial of", a, "is:", result);

// Using classic for..loop
function factfor(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log("Factorial of", b, "is:", factfor(b));

function yourname(name) {
  console.log(name + " bro you are good learner.");
  console.log(name + " bro you are good student.");
  console.log(name + " bro you are nice person.");
  console.log(name + " bro you are good kid.");
  console.log("");
}
// yourname("Nikhil")
// yourname("Nirajan")
// yourname("Rohit")

function sum(a, b) {
  // console.log(a + b);
  return a + b;
}

result = sum(22, 3);
result1 = sum(1, 9);
console.log("The sum of these numbers is: ", result);
console.log("The sum of these numbers is:", result1);

const func1 = (x) => {
  console.log("The value that this arrow function returns is: ", x);
};

func1(11);

// arrow function for sum of 2 numbers

const sumofnum = (a, b) => {
  let c = a + b;
  return c;
};

let addition = sumofnum(10, 2);
console.log("The sum of a and b are: ", addition);

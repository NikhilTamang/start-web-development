let a = Math.random();
console.log(a);

let x = prompt(`Enter the first number: `);
let y = prompt("Enter the operation you want to perform: ");
let z = prompt("Enter the second number: ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (a > 0.1) {
  alert(`The result is : ${eval(`${x} ${y} ${z}`)}`);
} else {
  y = obj[y];
  alert(`The result is : ${eval(`${x} ${y} ${z}`)}`);
}

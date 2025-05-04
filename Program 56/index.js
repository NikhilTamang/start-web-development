// console.log("hello bro this is a conditional learning program");

// let age = 56;
// let nikhil = 9;

// age -= nikhil;
// console.log(age)

// console.log(age + nikhil);
// console.log(age - nikhil);
// console.log(age * nikhil);
// console.log(age / nikhil);
// console.log(age ** nikhil);
// console.log(age % nikhil);

// if (age == 18){
//     console.log("You are allowed to drive.");

// }
// else{
//     console.log("You cannot drive lil bro.")
// }

// if-else if-else ladder

let age = 5;
if (age == 18) {
  console.log("Congrats you can drive now lil bro.");
} else if (age > 18) {
  console.log("You are allowed to drive.");
} else if (age > 40) {
  console.log("You are old now.");
} else {
  console.log("You cannot drive lil bro.");
}

let a = 14;
let agecheck = a > 18 ? a - 38 : a + 4;

console.log(agecheck);

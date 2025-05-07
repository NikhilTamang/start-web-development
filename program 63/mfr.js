// Definition:
// Function: Standalone block of code.
// Method: Function that is a property of an object.

let arr = [1, 3, 43, 22, 2];

let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element ** 2);
// }
// console.log(newArr);

newArr = arr.map((e) => { //Map() method
  return e ** 2;
});

console.log(newArr);

const greaterThanThree = (e) => { //filter() method
  if (e > 3) {
    return true;
  }
  return false;
};

console.log(arr.filter(greaterThanThree));

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];    // for reduce() method
let add = (a, b) => {
  return a + b;
};

console.log(arr1.reduce(add));

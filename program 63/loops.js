let a = [2, 4, 54, 22, 1];

for (let index = 0; index < a.length; index++) {
  // The for loop
  const element = a[index];
  console.log(element);
}

a.forEach((value, index, arr) => {
  // The for each element
  console.log(value, index, arr);
});

let obj = {
  // obj for for in loop
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  // The for...in loop
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}

for (const element of a) {
  //The for....of loop
  console.log(element);
}

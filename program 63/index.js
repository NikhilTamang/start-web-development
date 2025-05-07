// let arr1 = [2, 3, 4, 5, 6]
// console.log(arr1)
// console.log(arr1.length)

// arr1[2] = 10
// console.log(arr1)

let arr = [2, 3, 4, 5, 6];
console.log(arr.toString());

console.log(arr.join(" and "));

let a = [1.3, 4, 5];
console.log(a); // [1.3, 4, 5]

a.pop();
console.log(a); // [1.3, 4]

a.push("NewValue");
console.log(a); // [1.3, 4, 'NewValue']

a.push("Nii");
console.log(a); // [1.3, 4, 'NewValue', 'Nii']

a.shift();
console.log(a); // [4, 'NewValue', 'Nii']

a.unshift("KHIl");
console.log(a); // ['KHIl', 4, 'NewValue', 'Nii']

delete a[2];
console.log(a); // ['KHIl', 4, empty, 'Nii']

console.log(a.length); // 4
console.log(a[2]); // undefined
console.log(a); // ['KHIl', 4, empty, 'Nii']

let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [7, 8, 9];

let concat = x.concat(y, z);
console.log(`The concated output is: ${concat}`);

let unorganized = [2, 34, 21, 1, 9, 83];
console.log(`The sorted array is: ${unorganized.sort()}`);

// This is the syntax for splice()
// array.splice(start, deleteCount, item1, item2, ...);
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2, 6, 7); // Replaces 2 elements starting at index 1 with 6 and 7
console.log(arr2); // [1, 6, 7, 4, 5]

const num = [2, 3, 4, 5];
console.log(num.slice(2));
console.log(num.slice(0, 3));
console.log(num);

console.log(num.reverse());
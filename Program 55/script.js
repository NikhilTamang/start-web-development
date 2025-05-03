console.log ("Hey this is a console")

// var a = 5; 
// a = a + 10;
// var b = 43;
// var c = "Nikhil"

// console.log(a +b+2);
// console.log(typeof a, typeof b, typeof c);

// prefer let
let a = 5; 
let b = 43;
let c = "Nikhil"
{
    let a = 99;
    console.log(a);
}
console.log(a);

const a1 = 5;
// a1 = a1 + 5; not allowed because a1 is constant


let x = "Nikhil_Tamang";
let y = 20;
let z = 50.5;
const n = true; 
let p = undefined;
let q = null;

console.log(x, y, z, n, p, q);
console.log(typeof x, typeof y, typeof z, typeof n, typeof p, typeof q);

let o = {
    name : "Nikhil",
    "student_code" :"19",
    "College_name" : "JBC",
}
 console.log(o);

 o.last_name = "Tamang";
console.log(o);

 o.last_name = "Waiba"

console.log(o)


//  console.log("The type of o is : " +typeof o)
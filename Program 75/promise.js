console.log("Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you.");
  } else {
    setTimeout(() => {
      console.log("It is done.");
      resolve("Nikhil");
    }, 3000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2.");
  } else {
    setTimeout(() => {
      console.log("It is done 2.");
      resolve("Nikhil 2");
    }, 3000);
  }
});

// prom1
//   .then((a) => {
//     //promise.then()    runs when primise is resolved()
//     console.log(a);
//   })
//   .catch((err) => {
//     //promise.catch()   runs when promise is rejected
//     console.log(err);
//   });

let p3 = Promise.all([prom1, prom2]); // Promise.all
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

// let p3 = Promise.allSettled([prom1, prom2]); // Promise.Settled
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });

// let p3 = Promise.race([prom1, prom2]); // Promise.race
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });

// let p3 = Promise.any([prom1, prom2]); // Promise.any
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });

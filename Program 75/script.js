console.log("I am a hacker.");
console.log("hacker hai bhai hacker.");

setTimeout(() => {
  console.log("This is inside setTimeout.");
}, 3000);
setTimeout(() => {
  console.log("This is inside setTimeout 2.");
}, 1000);

console.log("The End.");

const callback = (arg) => {
  console.log(arg);
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Nikhil");
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
//     (arg) => {
//       console.log( arg);
//     }
// );

console.log("Nikhil tmg");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "yellow";

document.getElementById("blue").style.backgroundColor = "blue";

document.querySelector(".box").style.backgroundColor = "lightpink";

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});

let e = document.getElementsByTagName("div");
console.log(e);
console.log(e[2].matches("#blue"));
console.log(e[2].closest("div"));
console.log(document.querySelector(".container").contains(e[2]));

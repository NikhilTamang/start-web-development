let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[0].style.backgroundColor = "yellow";

boxes[0].nextElementSibling.style.backgroundColor = "lightgreen";

document.getElementById("blue").style.backgroundColor = "blue";

boxes[4].previousElementSibling.style.backgroundColor = "lightpink";

document.body.firstElementChild.lastElementChild.style.backgroundColor = "red";

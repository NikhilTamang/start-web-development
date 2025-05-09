console.log("hello world");
console.log(document.body);
console.log(document.body.childNodes[1].childNodes);

let cont = document.body.childNodes[1];

console.log(cont.firstElementChild);
console.log(cont.lastChild);
console.log(cont.lastElementChild.parentElement);

cont.lastElementChild.style.backgroundColor = "lightgreen";

console.log(document.body.firstElementChild.childNodes);

console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[1]);
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[3].nextElementSibling);

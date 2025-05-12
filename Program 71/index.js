console.log("Hello ");

document.querySelector(".box").innerHTML;

document.querySelector(".container").innerHTML;

document.querySelector(".container").innerText;

document.querySelector(".container").tagName;

document.querySelector(".container").nodeName;

document.querySelector(".container").textContent;

document.querySelector(".container").hidden = "true";

document.querySelector(".box").innerHTML = "Ok so this is the first box out of 5";

document.querySelector(".box").hasAttribute("style");

document.querySelector(".box").getAttribute("style");

document.querySelector(".box").setAttribute("style", "background-color: yellow");

document.querySelector(".box").removeAttribute("style");

document.querySelector(".box").attributes;

document.designMode = "on";         //The whole page becomes editable directly in the browser, just like a content-editable text area.

document.querySelector(".box").dataset;

let div = document.createElement("div");
div.innerHTML = "This is inserted using DOM. <b>By- your's truly.</b>";
div.setAttribute("class", "created");
document.querySelector(".container").replaceWith(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML(
  "afterbegin",
  "<b>I am under the water uhuhuhuhuhuh....</b>"
);

document.querySelector(".box").remove();

document.querySelector(".container").classList;
document.querySelector(".container").className;

document.querySelector(".container").classList.add("nikhil");
document.querySelector(".container").classList.remove("nikhil");

document.querySelector(".container").classList.toggle("red");
document.querySelector(".container").classList.toggle("red");
document.querySelector(".container").classList.toggle("red");

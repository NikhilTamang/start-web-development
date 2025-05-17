let button = document.getElementById("btn");

// Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
button.addEventListener("click", () => {
  // alert("You clicked a button.")
  document.querySelector(".box").innerHTML =
    " <b>A button was clicked.</b> Thanks for clicking.";
});

// Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    " <b> Bro you clicked the button twice.</b>";
});

// Fired when the user attempts to open a context menu.
button.addEventListener("contextmenu", () => {
  alert("Why did you right click that button?");
});

// Fired when a key is pressed.
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});

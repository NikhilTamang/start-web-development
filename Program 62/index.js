function adjective(n) {
  let a = "Crazy";
  let b = "Amazing";
  let c = "Fire";

  if (n <= 0.3) {
    return a;
  } else if (n >= 0.5) {
    return c;
  } else {
    return b;
  }
}

function shopNames(n) {
  let a = "Engine";
  let b = "Foods";
  let c = "Garments";

  if (n >= 0.2) {
    return b;
  } else if (n <= 0.5) {
    return a;
  } else {
    return c;
  }
}
function anotherWord(n) {
  let a = "Bros";
  let b = "Limited";
  let c = "Hub";

  if (n >= 0.2) {
    return c;
  } else if (n >= 0.3) {
    return b;
  } else {
    return a;
  }
}

console.log(
  `Your business name is: ${adjective(Math.random())}  ${shopNames(
    Math.random()
  )}  ${anotherWord(Math.random())} `
);

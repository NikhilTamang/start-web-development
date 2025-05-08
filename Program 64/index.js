let first, second, third;
let rand = Math.random();
// For the first word
if (rand < 0.33) {
  first = "Crazy";
} else if (rand >= 0.33 && rand < 0.66) {
  first = "Amazing";
} else {
  first = "Fire";
}

// For the second word
rand = Math.random();
if (rand < 0.33) {
  second = "Engine";
} else if (rand >= 0.33 && rand < 0.66) {
  second = "Foods";
} else {
  second = "Garments";
}

// For the third word
rand = Math.random();
if (rand < 0.33) {
  third = "Bros";
} else if (rand >= 0.33 && rand < 0.66) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`Your business name is: ${first} ${second} ${third}`);

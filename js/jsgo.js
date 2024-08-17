console.log("This is JavaScript code from an external file!");

let lit = "A";

document.getElementById("lit").innerText = lit;

// Глобальна змінна
const value = "I'm a global variable";

function foo() {
  // Можна звернутися до глобальної змінної
  console.log(value); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value);
// "I'm a global variable"

document.getElementById("global").innerText = value;

// Змінні або функції, оголошені поза блоками коду
function foo() {
  // Локальна змінна
  const valuee = "I'm a local variable 2";
  // Можна звернутися до локальної змінної
  console.log(valuee); // "I'm a local variable 2"
  document.getElementById("defined").innerText = valuee; // Тільки в межах
}

foo();
console.log(valuee);

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));

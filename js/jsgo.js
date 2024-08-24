console.log('This is JavaScript code from an external file!');

let lit = 'A';

document.getElementById('lit').innerText = lit;

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

document.getElementById('global').innerText = value;

// Змінні або функції, оголошені поза блоками коду
function foo() {
  // Локальна змінна
  const valuee = "I'm a local variable 2";
  // Можна звернутися до локальної змінної
  console.log(valuee); // "I'm a local variable 2"
  document.getElementById('defined').innerText = valuee; // Тільки в межах
}

// foo();
// console.log(valuee);

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//Метод substring(start, end)
function getSubstring(string, length) {
  return string.substring(0, length);
}

console.log(getSubstring('Hello world', 3)); // "Hel"
console.log(getSubstring('Hello world', 5)); // "Hello"
console.log(getSubstring('Hello world', 8)); // "Hello wo"
console.log(getSubstring('Hello world', 11)); // "Hello world"
console.log(getSubstring('Hello world', 0)); // ""

function normalizeInput(input, to) {
  return to === 'upper' ? input.toUpperCase() : input.toLowerCase();
}

// Приклади виклику функції та їх результати:
console.log(normalizeInput("This ISN'T SpaM", 'lower')); // "this isn't spam"
console.log(normalizeInput("This ISN'T SpaM", 'upper')); // "THIS ISN'T SPAM"
console.log(normalizeInput('Big SALE', 'lower')); // "big sale"
console.log(normalizeInput('Big SALE', 'upper')); // "BIG SALE"
console.log(normalizeInput('Stay Awhile and Listen', 'lower')); // "stay awhile and listen"
console.log(normalizeInput('Stay Awhile and Listen', 'upper')); // "STAY AWHILE AND LISTEN"

// Метод includes()
function checkForName(fullName, firstName) {
  // Приводимо обидва рядки до нижнього регістру
  const normalizedFullName = fullName.toLowerCase();
  const normalizedFirstName = firstName.toLowerCase();

  // Перевіряємо, чи входить firstName у fullName
  return normalizedFullName.includes(normalizedFirstName);
}

console.log(checkForName('Jason Neis', 'Jason')); // Повертає true
console.log(checkForName('Jason Neis', 'jAsOn')); // Повертає true
console.log(checkForName('Jason Neis', 'Jacob')); // Повертає false
console.log(checkForName('Caty Stars', 'Caty')); // Повертає true
console.log(checkForName('Caty Stars', 'cAtY')); // Повертає true
console.log(checkForName('Caty Stars', 'Andromeda')); // Повертає false

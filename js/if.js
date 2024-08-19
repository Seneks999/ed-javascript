function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
}

// Перевірка функції
console.log(checkAge(20)); // "You are an adult"
console.log(checkAge(17)); // undefined
console.log(checkAge(10)); // undefined
console.log(checkAge(30)); // "You are an adult"

// alert(checkAge(20));

// Отримання елементів за допомогою їх ID
const outputElement1 = document.getElementById("output1");
const outputElement2 = document.getElementById("output2");
const outputElement3 = document.getElementById("output3");
const outputElement4 = document.getElementById("output4");

// Вставка результатів функції у внутрішній HTML цих елементів
outputElement1.innerHTML = checkAge(20); // Виведе "You are an adult"
outputElement2.innerHTML = checkAge(17); // Виведе undefined (нічого не виведе)
outputElement3.innerHTML = checkAge(10); // Виведе undefined (нічого не виведе)
outputElement4.innerHTML = checkAge(30); // Виведе "You are an adult"

// Умова перетворюється до true, тому виконується код у тілі (фігурних дужках) блоку if, а тіло блоку else ігнорується.
// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Умова перетворюється до false, код із тіла блоку if буде пропущений, і виконається код із тіла блоку else.
const grade = 40;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

// Задача 2
function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

// Перевірка функції
console.log(checkStorage(100, 50)); // "Order is processed, our manager will contact you"
console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
console.log(checkStorage(200, 20)); // "Order is processed, our manager will contact you"
console.log(checkStorage(200, 150)); // "Order is processed, our manager will contact you"
console.log(checkStorage(150, 180)); // "Not enough goods in stock!"

// Завдання 3

const grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

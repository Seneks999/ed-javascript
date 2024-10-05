'use strict';

// alert('Привет, мир!');

// let greeting1 = 'Hello Alex! How are you?';
// console.log(greeting1);

// let greeting2 = 'Hello Piter! How are you?';
// console.log(greeting2);

// let greeting3 = 'Hello Kate! How are you?';
// console.log(greeting3);

/* ----------------------------------------
Створена функція
---------------------------------------- */

// function greeting(name) {
//   console.log(`Hello ${name}! How are you?`);
// }
/* --------------------------------------------
Тепер можна кожного разу передавати новий параметр
---------------------------------------------- */
// Виклик функції
// greeting('Alex');
// greeting('Piter');
// greeting('Kate');

// function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
//  Після return код не працює
// }
// calculateSum(5, 6);
// let answer = calculateSum(6, 7);
// console.log(answer);

// let res = calculateSum(50, 100);
// let res = calculateSum(calculateSum(10, 20), calculateSum(30, 40));
// console.log(res);

/*
Funkshine declaration and function expression
*/
// Funkshine declaration можемо викликати до того як функція оглошена
// calculateSum(20, 15);

// function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// }

/*
Function expression.
Оголошую змінну в яку додаю функцію
Викликати тільки після оголошення
*/
// let calculateSum = function (x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// };
// calculateSum(20, 15);

// Аргументи showOk та showCancel функції ask називаються функціями зворотного виклику або просто колбеками (англ. “called back”).
// showOk стає колбеком, якщо відповідь — “yes”, а showCancel, якщо відповідь — “no”.

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert('Ви погодились.');
// }
// function showCancel() {
//   alert('Ви скасували виконання.');
// }
// // використання: функції showOk, showCancel передаються як аргументи для ask
// ask('Ви згодні?', showOk, showCancel);

// Ми можемо використати Функціональний Вираз, щоб записати ту ж саму функцію коротше:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   }
// );

// let a = 2;
// let b = 3;
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(a, b));

// Оголошення Функції
// let a = 5;
// let b = 3;
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(a, b));

// let sayHi = function (name) {
//   // (*) більше ніякої магії
//   // alert(`Привіт, ${name}`);
//   console.log(`Привіт, ${name}`);
// };
// sayHi('Іван'); // нема помилки!

/* --------------------------------------------------------------------
Стрілкові функції
let func = (arg1, arg2, ..., argN) => expression;
Цей код створить функцію func з аргументами arg1..argN,
що обчислює expression з правого боку (використовуючи ці аргументи) та повертає його результат.
-------------------------------------------------------------------- */
// let sum = (a, b) => a + b;

/* Ця стрілкова функція — це коротша форма для:

let sum = function(a, b) {
  return a + b;
};
*/

// alert(sum(1, 2)); // 3
// console.log(sum(1, 2));

// /* */
// let age = prompt('Скільки вам років?', 18);
// let welcome = age < 18 ? () => alert('Привіт') : () => alert('Вітання!');
// welcome();

/* */
// let sum = (a, b) => {
//   // фігурна дужка починає блок багаторядкової функції
//   let result = a + b;
//   return result; // якщо ми використовуємо фігурні дужки, то щоб повернути результат, потрібно додати "return"
// };

// alert(sum(1, 2)); // 3
// console.log(sum(1, 2));

// Звичайний запис функції
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   }
// );

// Та сама фцнкція записана як стрілочна
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Ви згодні?',
//   () => alert('Ви погодились.'),
//   () => alert('Ви скасували виконання.')
// );

function formatMessage(message, maxLength) {
  if (message.maxLength <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMessage('Sunt maxime asperiores laborioram, 15'));

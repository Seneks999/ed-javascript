function showMessage() {
  let message = 'Привіт, я JavaScript!'; // локальна змінна

  alert(message);
}

showMessage(); // Привіт, я JavaScript!

// for (let i = 0; i < 3; ++i) {
//   alert(`число ${i + 1}!`);
// } // console.log('10' - 5);

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Mango')); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// Перевірка логіна та пароля

/* 
let userName = prompt('Хто там?', '');

if (userName === 'Admin') {
  let pass = prompt('Пароль?', '');

  if (pass === 'Господар') {
    alert('Ласкаво просимо!');
  } else if (pass === '' || pass === null) {
    alert('Скасовано');
  } else {
    alert('Неправильний пароль');
  }
} else if (userName === '' || userName === null) {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}
  */

//let age = 55;

// if (age >= 14 && age <= 90) alert('ok!');
// if (!(age < 14 || age > 90)) alert('Yes!');
// else alert('No!');

// ('use strict');
// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// js / js - lessons.js;
// export function changeText() {
//   let t1 = document.getElementById('t1');
//   t1.textContent = 'New Text';
// }

// js / js - lessons.js;
// function changeText() {
//   let t1 = document.getElementById('t1');
//   t1.textContent = 'New Text';
// }

// window.changeText = changeText;

//  Заміна тексту параграфа при клікі на кнопку
// function changeText() {
//   let t1 = document.getElementById('t1');
//   t1.textContent = 'New Text';
// }

// function changeText() {
//   let t1 = document.getElementById('t1');
//   t1.textContent = 'New Text';
// }

// let age = prompt('Вік?', 18);

// let message =
//   age < 3
//     ? 'Привіт, крихітко!'
//     : age < 18
//     ? 'Вітаю!'
//     : age < 100
//     ? 'Моє шанування!'
//     : 'Який незвичайний вік!';

// alert(message);

// let message =
//   login == 'Працівник'
//     ? 'Привіт'
//     : login == 'Директор'
//     ? 'Вітаю'
//     : login == ''
//     ? 'Немає логіну'
//     : '';

// let a = +prompt('Встав значення a', '');
// let b = +prompt('Встав значення b', '');

// let result = a + b < 4 ? 'Нижче' : 'Вище';

// alert(result);

// let numeric = prompt('Вставте чисто 1, 0 або  -1', '');

// if (numeric > 0) {
//   alert(1);
// } else if (numeric < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let company = prompt('Яка “офіційна” назва JavaScript?', '');

// if (company == 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Ви не знаєте? ECMAScript!');
// }

// let age = prompt('Вік?', '');

// let message;

// if (age < 3) {
//   message = 'Привіт, крихітко!';
// } else if (age < 18) {
//   message = 'Вітаю!';
// } else if (age < 100) {
// message = 'Моє шанування!';
// } else {
//   message = 'Який незвичайний вік!';
// }

// alert(message);

// let age = prompt('Скільки вам років?', '');

// // let accessAllowed = age > 18 ? true : false;

// let accessAllowed = age > 18;

// alert(accessAllowed);

// let year = prompt(
//   'В якому році була опублікована специфікація ECMAScript-2015?',
//   ''
// );

// if (year == 2015) {
//   alert('Ви здогадалися правильно!');
// } else {
//   alert('Як ви можете так помилятися?'); // будь-яке значення, окрім 2015
// }

// let year = prompt(
//   'В якому році була опублікована специфікація ECMAScript-2015?',
//   ''
// );

// if (year == 2015) {
//   alert('Це правильно!');
//   alert('Ви такий розумний!');
// }

// const propName = 'name';
// const user = {
//   age: 25,
//   [propName]: 'Henry Sibola',
// };

// console.log(user.name); // "Henry Sibola"

// const propName = 'name';
// const user = {
//   age: 25,
// };

// user[propName] = 'Henry Sibola';
// console.log(user); // "Henry Sibola"

// _________________________________________________________
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// alert(slugify('Arrays for beginners')); // Показує "arrays-for-beginners"
// alert(slugify('English for developer')); // Показує "english-for-developer"
// alert(slugify('Ten secrets of JavaScript')); // Показує "ten-secrets-of-javascript"
// alert(slugify('How to become a JUNIOR developer in TWO WEEKS')); // Показує "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// const title = prompt('Введіть заголовок для перетворення на slug:');
// alert(slugify(title));

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// const title = prompt('Введіть заголовок для перетворення на slug:');
// alert(slugify(title));

// const confirmation = confirm('Перетворити "Arrays for beginners" на slug?');
// if (confirmation) {
//   alert(slugify('Arrays for beginners')); // Показує "arrays-for-beginners"
// } else {
//   alert('Операцію скасовано.');
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

/*
console.log(3 >= '2');
console.log('3' >= '2');
console.log(false == 0);
console.log(false === 0);
console.log(false === false);
console.log(null === null);
console.log('ваа' >= 'ббб');
console.log('я' >= 'ббб');
console.log('БББ' >= 'ааа');
console.log('' && '1');
console.log('1' || '');
console.log(('1' && '2') || '3');
console.log(('' && '2') || '3');
console.log(('1' && '2') || '');
console.log((0 && 1) || (2 && 3) || 4 || (5 && 6 && 7));
console.log(3 >= 2 && 5 >= 4);
*/

// alert('Привіт!');
// let myName = prompt('What is you name?');
// let friendName = prompt('What is you friend`s name?');
// let myAppleCount = +prompt('How many appels do I have?');
// let friendAppleCount = +prompt('How many appels does my friend have?');
// let totalCount = myAppleCount + friendAppleCount;
// let answer = `Значить ${myName} і ${friendName} мають ${totalCount} яблук!`;
// alert(answer);

// alert('Привіт!');
// let myName = prompt('What is you name?');
// let friendName = prompt('What is you friend`s name?');
// let myAppleCount = prompt('How many appels do I have?');
// let friendAppleCount = prompt('How many appels does my friend have?');
// let totalCount = Number(myAppleCount) + Number(friendAppleCount);
// let answer =
//   'Значить ' + myName + ' і ' + friendName + ' мають ' + totalCount + ' яблук!';
// alert(answer);
// console.log(answer);

// let a = 'string999';
// console.log(a);

// const myName = 'Edward';
// const friendName = 'Alex';
// let myNamberApples = 4;
// let friendNamberApples = 6;
// const howManyAppelsI = 'How many appels do I have?';
// const howManyAppelsFriend = 'How many appels does my friend have?';

// alert('Hello!');
// prompt('What is your neme?');
// prompt('What is your friend`s neme?');
// prompt(howManyAppelsI);
// prompt(howManyAppelsFriend);
// alert('So, Edward and Alex have ten appels.');

// prompt, alert, confirm

// alert(typeof '');
// alert(typeof 0);
// alert(typeof 123);
// alert(typeof '123');
// alert(typeof typeof 777);
// alert(typeof hull);

// let typeTest = null;
// alert(typeof typeTest);

// console.log(typeof NaN);

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// -------------------------------

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }

// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers(3, 11));

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// let c = calculateTotalPrice([12, 85, 37, 4]);
// c = calculateTotalPrice([12, 85, 37, 4]);
// console.log(c);

// const plus = 1 + 1;
// console.log(plus);
// const number = 3.1;

// console.log(Math.floor(number)); // округлює до меншого
// console.log(Math.ceil(number)); // округлює до більшого
// console.log(Math.round(number)); // округлює до найближчого цілого

// const string = 'My string';

// за допомогою метода length дізнаємось довжину рядка
// console.log(string.length);

// викликає певний символ з рядка
// console.log(string.charAt(3));
// console.log(string.toUpperCase(string));
// console.log(string.toLowerCase(string));
// console.log(string.substring(0, 2));
// console.log(string.slice(-2));

// масиви
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// заміна елементу масиву
// array[1] = 'Hello!';
// array[3] = 'Hi';
// console.log(array);

// виведення елементу масиву 1
// console.log(array[1]);

// визначення довжини масиву
// console.log(array.length);

// визначення останнього елементу масиву
// console.log(array[array.length - 1]);

// додавання елементу в кнець масиву
// array.push('end');
// console.log(array);

// видалення елементу с кінця масиву
// array.pop('end');
// console.log(array);

// додавання елементу на початок масиву
// array.unshift('start');
// console.log(array);

// видалення елементу на початок масиву
// array.shift('start');
// console.log(array);

// додаємо об'єкт на початок масиву
// array.unshift({
//   title: 'title one',
// });
// console.log(array);

// методи в js
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// метод .join перетворює масив на рядок, також можимо щось вставляти між елементами масиву
// console.log(array.join('; hi '));

// перетворення рядка на масив (метод .split)
// const string = 'name1, name2, name3, name4';
// console.log(string.split(' , '));

// метод .splice використовується три аргументи
// 1 з якого індекса починаємо
// 2 кількість елементів що видаляємо
// 3
// console.log(array.splice(0, 2, 'inserted string'));
// console.log(array);

// метод .slice
// console.log(array.slice(0, 3));
// console.log(array);

// const arrayTwo = [15, 33, 105, 1];
// const arrayThree = [35, 'hi', true, undefined];

// метод .sort сортує масив як строку Array(4) [ 1, 105, 15, 33 ]
// console.log(arrayTwo.sort());
// метод .reverse відображає масив в зворотньому порядку
// console.log(arrayTwo.reverse());

// method .concad adds an array to an array
// console.log(arrayThree.concat());

// method for each passes three arguments
// 1 current argument
// 2 index
// 3 current array

// arrayTwo.forEach(function (item, i, arr) {
//   console.log(i + ':' + item + ' array ' + arr);
//   console.log(item);
// });

// const arrayFour = [66, 30, 210, 2, 1, 'ga'];
// cycles
// cycles for (first variable; second, conditions for exiting the cycle; third, the actions of the variable after iteration)
// for (let i = 0; i < 6; i++) {
//   console.log(arrayFour[i]);
// }

// cycles while
// const arrayFifth = [666, 0.3, 10, 22, true, 11, 'ga'];
// let i = 0;
// while (i < arrayFifth.length) {
//   console.log(arrayFifth[i]);
//   i++;
// }

// cycles do while always runs one cycle
// const arraySixth = [999, 0.33, 1, 2, true, 101, 'waw'];

// let y = 0;
// do {
//   console.log(y);
//   y++;
// } while (y <= 9);

// Conditional constructions if else

// let road = 'no right';

// if (road === 'left') {
//   console.log('road to left');
// } else if (road === 'right') {
//   console.log('road to right');
// } else {
//   console.log('bad road ');
// }

// тернарний оператор ternary operator
// let road = 'up';
// let weather = 'sun';

// let turn = road === 'left' ? 'road to left' : 'bad road ';
// console.log(turn);

// logical operator and

// if (road === 'left' && weather === 'rain') {
//   console.log('have a nice trip');
// } else {
//   console.log('do not go anywhere');
// }

// logical operator or

// if (road === 'left' || weather === 'rain') {
//   console.log('have a nice trip');
// } else {
//   console.log('do not go anywhere');
// }

// switch'
// switch (road) {
//   case 'left':
//     console.log('road to left');
//     break;
//   case 'right':
//     console.log('road to right');
//     break;
//   default:
//     console.log('default');
//     break;
// }

// objects
// let obj = new Object();
// let human = {};

// human.name = 'Edward';
// human.age = 55;
// delete human.age;

// console.log(human.age);
// console.log(human);

// let human = {
//   name: 'Edward',
//   age: 55,
// };

// let n = 'Edward';
// let a = 'age';
// console.log(human[a]);

// console.log(human.age);
// console.log(human);

// let person = {
//   name: 'Edward',
//   age: 55,
// };

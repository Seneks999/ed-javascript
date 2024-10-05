// window.onload = function () {
//   alert('Page is loaded!');
// };

/* ---------------------------------------
Цикл for (Loop for)
----------------------------------------- */
/* console.log('start');
for (let i = 0; i < 10; i++) {
  // console.log('Hello world!');
  console.log('i= ' + i);
}
console.log('finish'); */

/* -----------------------------------------------
Обхід масиву за допомогою циклу for (Traversing an array using a for loop)
------------------------------------------------ */
// const fruits = ['Яблуко', 'Груша', 'Слива', 'Апельсин', 'Виноград'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// for (let i = 0; i < 4; i++) {
//   console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

/* ----------------------------------------
Метод for eatch (Method for eatch)
Обхід елементів сторінки, наприклад, знайти всі заголовки та щось з ними зробити
Traverse page elements, for example, find all headings and do something with them
----------------------------------------- */
// const fruits = ['Яблуко', 'Груша', 'Слива', 'Апельсин', 'Виноград'];

// Перший параметр завжди значення, другий - завжди індекс
// (The first parameter is always a value, the second is always an index)
// Якщо індекс не був оголошений, його не можна використовувати
// If an index has not been declared, it cannot be used
/* 
fruits.forEach(function (item, index) {
  console.log(`Елемент з індексом = ${index} має значення = ${item}`);
});
*/

// Цикл який використовується найчастіше

// const any = 'world';
// for (let i = 0; i < any.length; i += 1) {
//   console.log(any[i]);
// }

// const any = 'world';
// for (let i = 0; i < any.length; i += 1) {
//   if (i === 3) {
//     break;
//   }
//   console.log(any[i]);
// }

// const any = 'world';
// for (let i = 0; i < any.length; i += 1) {
//   if (any[i] === 'r') {
//     break;
//   }
//   console.log(any[i]);
// }

/*
Цикл while
*/
// let counter = 0;
// while (counter < 3) {
//   console.log(counter);
//   counter += 1;
// }

/*
Цикл do while
Якщо потрібно виконати цикл хоча б 1 раз
*/
// console.log('before');

// let counter = 20;
// do {
//   console.log(counter);
//   counter++;
// } while (counter < 10);

// console.log('before');

// const a = 20;
// const b = 100;

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = a; i <= b; i++) {
//   // 20 % 5 = 0 = false
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }
// console.log(20 % 5);

// const a = 20;
// const b = 100;

// for (let i = b; i >= a; i--) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   total += i;
// }
// console.log(total);

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     continue;
//   }
//   // total += i;
//   console.log('after', i);
// }

const any = 'world';

for (let i = 0; i < any.length; i += 1) {
  console.log(typeof i);

  console.table(i);
}

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
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
let road = 'up';
let weather = 'sun';

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

let person = {
  name: 'Edward',
  age: 55,
};

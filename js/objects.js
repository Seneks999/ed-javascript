'use strict';

/*
Опис за допомогою змінних (Description with variables)
*/

// const piterName = 'Alex';
// const piterAge = 55;
// const piterSpeciality = 'web-developer';
// const piterCity = 'Kyiv';

// console.log(
//   `Hello, my name is ${piterName}, I am a ${piterSpeciality}, I am from ${piterCity}!`
// );
/**/

// Всі данні присвоїти одній змінній можна за допомогою об'єкта
// You can assign all data to one variable using the object

// const alex = {
//   name: 'Alex',
//   age: 28,
//   speciality: 'Web-developer',
//   city: 'Kyiv',
// };

// console.log(alex);

// Об'єкти мають властивості (характеристики), методи (функціонал)
// Objects have properties (characteristics) and methods (functionality)

// function sayHi(name, age, spec, city) {
//   console.log(
//     `Hello, my name is ${name}, my age is ${age} I am a ${spec}, I live in ${city}!`
//   );
// }
// sayHi(piterName, piterAge, piterSpeciality, piterCity);

// const alex = {
//   name: 'Alex',
//   age: 28,
//   spec: 'Web-developer',
//   city: 'Kyiv',
//   sayHi: function (name, age, spec, city) {
//     console.log(
//       `Hello, my name is ${this.name}, my age is ${this.age}. I am a ${this.spec}, I live in ${this.city}!`
//     );
//   },
// };
// this всередені методів посилається на об'єкт
// this inside methods refers to an object

// alex.sayHi(alex.name, alex.age, alex.spec, alex.city);

// alex.sayHi();

// console.log(alex);
// console.log(alex.name);
// console.log(alex.age);

// alex(alex.name, alex.age, alex.speciality, alex.city);

// Функцію можна записать внутр об'єкту (це є метод)
// A function can be written inside an object (this is the method)

/*
Конструктор для створення об'єктів (Constructor for creating objects )
*/
//  1-й варіант. Функція конструктора
// function Person(name, age, spec, city) {
//   this.name = name;
//   this.age = age;
//   this.spec = spec;
//   this.city = city;

//   this.sayHi = function () {
//     console.log(
//       `Hello, my name is ${this.name}, my age is ${this.age}. I am a ${this.spec}, I live in ${this.city}!`
//     );
//   };
// }

// const alex = new Person('Alex', 30, 'web-developer', 'Kyiv');
// console.log(alex);

// const mary = new Person('Mary', 28, 'web-designer', 'Lviv');
// console.log(alex);

// 2-й варіант. Конструктор на классах
class Person {
  constructor(name, age, spec, city) {
    this.name = name;
    this.age = age;
    this.spec = spec;
    this.city = city;
  }
  sayHi = function () {
    `Hello, my name is ${this.name}, my age is ${this.age}. I am a ${this.spec}, I live in ${this.city}!`;
  };
}

const alex = new Person('Alex', 30, 'web-developer', 'Kyiv');
console.log(alex);
